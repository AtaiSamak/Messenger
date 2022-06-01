import { ref, set } from "firebase/database";
import { auth, database } from "../initApp";
import getUserFromDB from "./getUserFromDB";

const addFriend = async (friendPhoneNumber) => {
    const phoneNumber = auth.currentUser.phoneNumber;
    const friend = await getUserFromDB(friendPhoneNumber);
    set(ref(database, `users/${phoneNumber}/friends/${friendPhoneNumber}`), {
        ...friend,
        phoneNumber: friendPhoneNumber,
    });
};

export default addFriend;
