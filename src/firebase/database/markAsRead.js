import { set, ref } from "firebase/database";
import { database } from "../initApp";

const markAsRead = async (chat, userPhone) => {
    if (!chat || !chat.hasOwnProperty("messages")) return;
    const messages = chat.messages.map((message) => {
        if (message.user === userPhone) {
            return message;
        }
        message.isRead = true;
        return message;
    });
    set(ref(database, `chats/${chat.id}`), {
        ...chat,
        messages,
    });
};

export default markAsRead;
