import React, { useContext, useEffect } from "react";
import Messages from "./messages";
import "./body.scss";
import { MessageContext } from "../../context";
import { RoundSpinner } from "../../common";

const Body = () => {
    const chatEndRef = React.createRef();
    const { chatLoading } = useContext(MessageContext);

    useEffect(() => {
        scrollToBottom();
    });

    const scrollToBottom = () => {
        chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    };

    return (
        <div className="body" ref={chatEndRef}>
            {chatLoading ? <RoundSpinner color="#b0b0b0" /> : <Messages />}
        </div>
    );
};

export default Body;
