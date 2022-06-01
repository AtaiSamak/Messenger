import { ref, set } from "firebase/database";
import { database } from "../initApp";

const updateUserInDatabase = ({
    uid,
    phoneNumber,
    displayName,
    photoURL,
    metadata,
}) => {
    const lastSeen = metadata.lastSignInTime;

    set(ref(database, `users/${phoneNumber}/info`), {
        uid,
        displayName,
        photoURL,
        lastSeen,
    });
};

export default updateUserInDatabase;
