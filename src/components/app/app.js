import React, { useState } from "react";
import Chat from "../chat";
import Auth from "../auth";
import useUser from "../../hooks/useUser";
import useFriends from "../../hooks/useFriends";
import useChat from "../../hooks/useChat";

const App = () => {
    const user = useUser();
    const friends = useFriends((user && user.data) || null);
    const [responder, setResponder] = useState(null);

    const chat = useChat({
        user: (user && user.data) || null,
        setResponder,
        friends: friends.data || null,
    });

    return user && user.data ? (
        <Chat
            contextValue={{
                chat,
                user,
                friends,
                responder,
            }}
        />
    ) : (
        <Auth updateUserData={user.update} />
    );
};

export default App;
