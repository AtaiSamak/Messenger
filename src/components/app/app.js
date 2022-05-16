import React, { useState } from "react";
import Chat from "../chat";
import Auth from "../auth";
import { MessageContext } from "../context";
import getMessages from "../../utils/getMessages";
import "./app.scss";

const App = (props) => {
    const [isLogged, setIsLogged] = useState(false);
    const [messageList, setMessageList] = useState(getMessages());

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

    const chat = (
        <div className="app">
            <MessageContext.Provider value={{ sendMessage, messageList }}>
                <Chat userInfo={props.userInfo} messageList={messageList} />
            </MessageContext.Provider>
        </div>
    );

    const auth = <Auth onChangeIsLogged={onChangeIsLogged} />;

    return <> {isLogged ? chat : auth} </>;
};

export default App;
