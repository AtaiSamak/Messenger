import { onValue, ref } from "firebase/database";
import { database } from "../initApp";

const userListener = (phoneNumber, callback) => {
    const userRef = ref(database, `users/${phoneNumber}/info`);
    onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            callback(data);
        }
    });
    return userRef;
};

export default userListener;
