import { set, ref, get, child, update } from "firebase/database";
import { database } from "../initApp";

const sendMessageToDB = (chatID, message) => {
    set(ref(database, `chats/${chatID}/messages`), message);

    const databaseRef = ref(database);
    get(child(databaseRef, `chats/${chatID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const { firstUser, secondUser } = snapshot.val();
            const updates = {};
            updates[`users/${firstUser}/friends/${secondUser}/lastMessage`] =
                message[message.length - 1].text;
            updates[`users/${secondUser}/friends/${firstUser}/lastMessage`] =
                message[message.length - 1].text;
            update(databaseRef, updates);
        }
    });
};

export default sendMessageToDB;
