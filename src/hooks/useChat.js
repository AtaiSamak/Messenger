import { useEffect, useState } from "react";
import getConvertedMessages from "../helpers/getConvertedMessages";
import sendMessageToDB from "../firebase/database/sendMessageToDB";
import chatListener from "../firebase/database/chatListener";
import removeChatHistory from "../firebase/database/removeChatHistory";
import markAsRead from "../firebase/database/markAsRead";
import removeListener from "../firebase/database/removeListener";
import userListener from "../firebase/database/userListener";
import getActiveFriend from "../helpers/getActiveFriend";

const useChat = ({ user, friends }) => {
    const [data, setData] = useState(null);
    const [listener, setListener] = useState(null);
    const [responder, setResponder] = useState(null);
    const [respListener, setRespListener] = useState(null);

    useEffect(() => {
        if (data && user) markAsRead(data, user.phoneNumber);
    }, [data, user]);

    const sendMessage = (text) => {
        const messages = getConvertedMessages({
            user,
            text,
            messages: data.messages,
        });
        sendMessageToDB(data.id, messages);
        setData({ ...data, messages });
    };

    const toggle = async (phoneNumber) => {
        setResponder(getActiveFriend(friends, phoneNumber));
        if (listener) removeListener(listener);
        if (respListener) removeListener(respListener);
        if (phoneNumber) {
            setRespListener(
                userListener(phoneNumber, (data) => {
                    setResponder(data);
                })
            );
            setListener(await chatListener(phoneNumber, setData));
        } else setData(null);
    };

    const clearHistory = () => {
        removeChatHistory(data.id);
    };

    return { data, responder, sendMessage, toggle, clearHistory };
};

export default useChat;
