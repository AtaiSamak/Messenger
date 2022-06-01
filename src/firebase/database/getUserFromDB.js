import { database } from "../initApp";
import { ref, get, child } from "firebase/database";

const getUserFromDB = async (phoneNumber) => {
    const databaseRef = ref(database);
    return await get(child(databaseRef, `users/${phoneNumber}/info`))
        .then((snapshot) => {
            return snapshot.exists() ? snapshot.val() : null;
        })
        .catch((error) => {
            console.error("Get responder: " + error);
            return null;
        });
};

export default getUserFromDB;
