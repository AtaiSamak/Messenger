import { get, off, onValue, ref, child } from "firebase/database";
import { auth, database } from "../initApp";
import updateFriend from "./updateFriend";
import userListener from "./userListener";

const removeFriendListeners = (friendRefs) => {
    for (let friendRef of friendRefs) {
        off(friendRef);
    }
};

const setFriendsListener = ({ friendPhones }) => {
    const friendRefs =
        friendPhones &&
        friendPhones.map((phone) => {
            return userListener(phone, (data) => {
                if (data) updateFriend(phone);
            });
        });
    return friendRefs;
};

const setFrinedsDBListener = ({ phoneNumber, setFriends }) => {
    const friendsDBRef = ref(database, `users/${phoneNumber}/friends`);
    onValue(friendsDBRef, (snapshot) => {
        const data = snapshot.val();
        setFriends(Object.values(data));
    });
    return [friendsDBRef];
};

const friendsListener = async (setFriends) => {
    if (!auth.currentUser) return;
    const { phoneNumber } = auth.currentUser;
    const databaseRef = ref(database);
    let refers = [];

    await get(child(databaseRef, `users/${phoneNumber}/friends`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const friendPhones = Object.keys(snapshot.val());
                refers = setFriendsListener({ friendPhones }).concat(
                    setFrinedsDBListener({ phoneNumber, setFriends })
                );
            }
        })
        .catch((error) => {
            throw Error(error);
        });

    return refers;
};

export default friendsListener;
export { removeFriendListeners };
