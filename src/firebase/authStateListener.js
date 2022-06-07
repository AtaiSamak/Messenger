import { onAuthStateChanged } from "firebase/auth";
import updateUserInDatabase from "./database/updateUser";
import { auth } from "./initApp";

const authStateListener = (setUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                updateUserInDatabase(user);
            }
        }
    });
};

export default authStateListener;
