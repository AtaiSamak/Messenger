import { updateProfile } from "firebase/auth";
import updateUserInDatabase from "./database/addUser";
import { auth } from "./initApp";
import uploadUserPhoto from "./uploadPhoto";

const updateUser = {
    displayName: async (firstName, lastName) => {
        const user = auth.currentUser;
        return await updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
        })
            .then(() => {
                console.log("Profile updated");
                updateUserInDatabase(user);
                return true;
            })
            .catch((error) => {
                console.log("Profile didn't updated: " + error);
                return false;
            });
    },
    photoURL: async (file) => await uploadUserPhoto(file),
};

export default updateUser;
