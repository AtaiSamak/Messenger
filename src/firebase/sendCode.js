import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./initApp";

const sendCode = async (phoneNumber) => {
    const appVerifier = window.recaptchaVerifier;

    return await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            return true;
        })
        .catch((error) => {
            throw Error(`Error: ${error}`);
        });
};

export default sendCode;
