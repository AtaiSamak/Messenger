import React, { useContext, useEffect } from "react";
import Messages from "./messages";
import "./body.scss";
import { MessageContext } from "../../context";
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
            {chat ? <Messages /> : <RoundSpinner color="#b0b0b0" />}
        </div>
    );
};

export default Body;
