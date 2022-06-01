import { set, ref } from "firebase/database";
import { auth, database } from "../initApp";

const setChat = async (chatID, friendPhone) => {
    const { phoneNumber } = auth.currentUser;
    set(ref(database, `chats/${chatID}`), {
        firstUser: phoneNumber,
        secondUser: friendPhone,
        messages: [],
    });
};

export default setChat;
