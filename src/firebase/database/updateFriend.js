import { ref, set } from "firebase/database";
import { auth, database } from "../initApp";
import getUserFromDB from "./getUserFromDB";

const updateFriend = async (friendPhoneNumber) => {
    const { phoneNumber } = auth.currentUser;
    const user = await getUserFromDB(phoneNumber);
    const friend = await getUserFromDB(friendPhoneNumber);

    if (!friend) throw Error("No such user exists");

    set(ref(database, `users/${phoneNumber}/friends/${friendPhoneNumber}`), {
        phoneNumber: friendPhoneNumber,
        ...friend,
    });
    set(ref(database, `users/${friendPhoneNumber}/friends/${phoneNumber}`), {
        phoneNumber,
        ...user,
    });
};

export default updateFriend;
