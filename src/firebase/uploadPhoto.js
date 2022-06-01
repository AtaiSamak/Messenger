import { updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app, { auth } from "./initApp";

const setNewUserPhoto = async (url) => {
    const { currentUser } = auth;

    return await updateProfile(currentUser, {
        photoURL: url,
    })
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error("setNewUserPhoto: " + error);
            return false;
        });
};

const uploadUserPhoto = (file) => {
    const { currentUser } = auth;
    const storage = getStorage(app);
    const userPhotoRef = ref(storage, `users/${currentUser.uid}/photo`);
    const metadata = {
        size: 0.5,
    };

    uploadBytes(userPhotoRef, file, metadata)
        .then(async () => {
            const newPhotoUrl = await getDownloadURL(userPhotoRef)
                .then((url) => url)
                .catch(() => null);
            setNewUserPhoto(newPhotoUrl);
        })
        .catch((error) => {
            console.error("uploadUserPhoto: " + error);
        });
};

export default uploadUserPhoto;
