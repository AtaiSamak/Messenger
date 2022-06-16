import { remove, ref, get, child } from "firebase/database";
import { database } from "../initApp";

const removeChatHistory = async (chatID) => {
    await remove(ref(database, `chats/${chatID}/messages`));

    get(child(ref(database), `chats/${chatID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const { firstUser, secondUser } = snapshot.val();
            remove(
                ref(
                    database,
                    `users/${firstUser}/friends/${secondUser}/lastMessage`
                )
            );
            remove(
                ref(
                    database,
                    `users/${secondUser}/friends/${firstUser}/lastMessage`
                )
            );
        }
    });
};

export default removeChatHistory;
