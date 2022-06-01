import { useState } from "react";
import getConvertedMessages from "../helpers/getConvertedMessages";
import setMessage from "../firebase/database/setMessage";
import getActiveFriend from "../helpers/getActiveFriend";
import getChat from "../firebase/database/getChat";

const useChat = ({ user, setResponder, friends }) => {
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState(null);

    const sendMessage = (text) => {
        const messages = getConvertedMessages({
            user,
            text,
            messages: chat.messages,
        });
        setMessage(chat.id, messages);
        setChat({
            ...chat,
            messages,
        });
    };

    const toggleChat = async (phoneNumber) => {
        if (phoneNumber) {
            setResponder(getActiveFriend(friends, phoneNumber));
            setLoading(true);
            await getChat(phoneNumber, setChat);
            setLoading(false);
        } else setChat(null);
    };

    return { loading, sendMessage, chat, toggleChat };
};

export default useChat;
