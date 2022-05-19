import React, { useState } from "react";
import Chat from "../chat";
import Auth from "../auth";
import { MessageContext } from "../context";
import getMessages from "../../utils/getMessages";
import "./app.scss";
import getContact from "../../utils/getContact";

const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [messageList, setMessageList] = useState(getMessages());
    const [responder, setResponder] = useState(null);

    const onChangeIsLogged = (newStatus) => {
        setIsLogged(newStatus);
    };

    const sendMessage = (text) => {
        const currentTime = new Date();
        const newMessage = {
            user: "author",
            text: text,
            id: messageList.length + 1,
            time: currentTime.getTime(),
            isRead: false,
        };
        setMessageList([...messageList, newMessage]);
    };

    const changeResponder = (userID) => {
        setResponder(getContact(userID));
    };
    const chat = (
        <div className="app">
            <MessageContext.Provider
                value={{ sendMessage, messageList, responder, changeResponder }}
            >
                <Chat />
            </MessageContext.Provider>
        </div>
    );

    const auth = <Auth onChangeIsLogged={onChangeIsLogged} />;

    return <> {!isLogged ? chat : auth} </>;
};

export default App;
