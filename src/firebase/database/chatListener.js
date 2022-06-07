import { ref, onValue, off } from "firebase/database";
import { database } from "../initApp";
import getChatID from "./getChatID";
import setChat from "./setChat";

const chatListener = async (friendPhone, updateChat) => {
    const chatID = getChatID(friendPhone);
    const databaseRef = ref(database, `chats/${chatID}`);

    onValue(databaseRef, (snapshot) => {
        if (!snapshot.exists()) setChat(chatID, friendPhone);
        const data = snapshot.val();
        data.id = chatID;
        updateChat(data);
    });

    return databaseRef;
};

export default chatListener;
