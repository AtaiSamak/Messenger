import { auth } from "./initApp";
import { signOut } from "firebase/auth";

const signOutProfile = async () => {
    return await signOut(auth)
        .then(() => {
            console.log("Sign-out successful.");
            return true;
        })
        .catch((error) => {
            console.log("An error happened.");
            return false;
        });
};

export default signOutProfile;
