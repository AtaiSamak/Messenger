import { off } from "firebase/database";

const removeListener = (...refs) => {
    if (refs) {
        for (let ref of refs) off(ref);
    }
};

export default removeListener;
