import React, { useContext, useEffect } from "react";
import Messages from "./messages";
import "./body.scss";
import { MessageContext } from "../../app/app";
import { RoundSpinner } from "../../common";

const Body = () => {
    const chatEndRef = React.createRef();
    const { chat } = useContext(MessageContext);

    useEffect(() => {
        scrollToBottom();
    });

    const scrollToBottom = () => {
        chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    };

    return (
        <div className="body" ref={chatEndRef}>
            {chat.data ? <Messages /> : <RoundSpinner color="#b0b0b0" />}
        </div>
    );
};

export default Body;
