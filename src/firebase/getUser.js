import { auth } from "./initApp";
import userDefaultPoto from "../assets/userDefaultPhoto.png";

const getUser = (user = auth.currentUser) => {
    const displayName = user.displayName || " ";
    const photoURL = user.photoURL || userDefaultPoto;
    const firstName = displayName.split(" ")[0] || "";
    const lastName = displayName.split(" ")[1] || "";

    return {
        displayName,
        firstName,
        lastName,
        photoURL,
        ...user,
    };
};

export default getUser;
