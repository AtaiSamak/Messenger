import { remove, ref } from "firebase/database";
import { auth, database } from "../initApp";

const removeFriend = async (friendPhone) => {
    const userPhone = auth.currentUser.phoneNumber;
    await remove(ref(database, `users/${userPhone}/friends/${friendPhone}`));
};

export default removeFriend;
