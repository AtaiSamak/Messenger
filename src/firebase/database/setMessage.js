import { set, ref } from "firebase/database";
import { database } from "../initApp";

const setMessage = (chatID, message) => {
    set(ref(database, `chats/${chatID}/messages`), message);
};

export default setMessage;
