import React, { useState } from "react";
import Chat from "../chat";
import Auth from "../auth";
import { MessageContext } from "../context";
import useUser from "../../hooks/useUser";
import useFriends from "../../hooks/useFriends";
import useChat from "../../hooks/useChat";

const App = () => {
    const [user, updateUserData, handleSignOut] = useUser();
    const [responder, setResponder] = useState(null);
    const friends = useFriends(user);

    const chatProps = useChat({ user, setResponder, friends: friends.data });
    const { loading: chatLoading, sendMessage, chat, toggleChat } = chatProps;

    return (
        <MessageContext.Provider
            value={{
                sendMessage,
                toggleChat,
                chat,
                chatLoading,
                user,
                updateUserData,
                handleSignOut,
                friends,
                responder,
            }}
        >
            {user ? <Chat /> : <Auth updateUserData={updateUserData} />}
        </MessageContext.Provider>
    );
};

export default App;
