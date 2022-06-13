import { ref, update } from "firebase/database";
import { auth, database } from "../initApp";
import getUserFromDB from "./getUserFromDB";

const updateFriendField = (
    firstPhone,
    secondPhone,
    { phoneNumber, displayName, photoURL, lastSeen, connections }
) => {
    const updates = {};
    updates[`users/${firstPhone}/friends/${secondPhone}/phoneNumber`] =
        phoneNumber;
    updates[`users/${firstPhone}/friends/${secondPhone}/displayName`] =
        displayName;
    updates[`users/${firstPhone}/friends/${secondPhone}/photoURL`] = photoURL;
    updates[`users/${firstPhone}/friends/${secondPhone}/lastSeen`] = lastSeen;
    updates[`users/${firstPhone}/friends/${secondPhone}/connections`] = false;
    if (connections) {
        updates[`users/${firstPhone}/friends/${secondPhone}/connections`] =
            connections;
    }
    update(ref(database), updates);
};

const updateFriend = async (friendPhoneNumber) => {
    const { phoneNumber } = auth.currentUser;
    const user = await getUserFromDB(phoneNumber);
    const friend = await getUserFromDB(friendPhoneNumber);

    if (!friend) throw Error("No such user exists");

    updateFriendField(phoneNumber, friendPhoneNumber, friend);
    updateFriendField(friendPhoneNumber, phoneNumber, user);
};

export default updateFriend;
