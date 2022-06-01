import { child, get, ref } from "firebase/database";
import { auth, database } from "../initApp";

const getFriends = async () => {
    const { phoneNumber } = auth.currentUser;
    const databaseRef = ref(database);

    return await get(child(databaseRef, `users/${phoneNumber}/friends`))
        .then((snapshot) => {
            return snapshot.exists() ? Object.values(snapshot.val()) : null;
        })
        .catch((error) => {
            console.error("getFriends: " + error);
            return null;
        });
};

export default getFriends;
