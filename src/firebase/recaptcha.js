import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "./initApp";

const recaptcha = (ref) => {
    window.recaptchaVerifier = new RecaptchaVerifier(
        ref.current,
        { size: "invisible" },
        auth
    );
};

export default recaptcha;
