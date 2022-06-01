import { ref, get, child } from "firebase/database";
import { database } from "../initApp";
import getChatID from "./getChatID";
import setChat from "./setChat";

const getChat = async (friendPhone, updateChat) => {
    const chatID = getChatID(friendPhone);
    const databaseRef = ref(database);

    return await get(child(databaseRef, `chats/${chatID}`))
        .then(async (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                data.id = chatID;
                updateChat(data);
            } else {
                console.log("No data available");
                await setChat(chatID, friendPhone);
                updateChat(null);
            }
            return true;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

export default getChat;
