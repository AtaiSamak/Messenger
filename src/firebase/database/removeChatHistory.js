import { remove, ref } from "firebase/database";
import { database } from "../initApp";

const removeChatHistory = async (chatID) => {
    await remove(ref(database, `chats/${chatID}/messages`));
};

export default removeChatHistory;
