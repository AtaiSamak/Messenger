import { ref, update } from "firebase/database";
import { database } from "../initApp";

const updateUserInDatabase = ({ phoneNumber, displayName, photoURL }) => {
    const updates = {};
    updates[`/displayName`] = displayName;
    updates[`/photoURL`] = photoURL;
    updates[`/phoneNumber`] = phoneNumber;

    return update(ref(database, `users/${phoneNumber}/info`), updates);
};

export default updateUserInDatabase;
