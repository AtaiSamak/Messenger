import { onAuthStateChanged } from "firebase/auth";
import updateUserInDatabase from "./database/addUser";
import getUser from "./getUser";
import { auth } from "./initApp";

const authStateListener = (setUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(getUser(user));
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                updateUserInDatabase(user);
            }
        }
    });
};

export default authStateListener;
