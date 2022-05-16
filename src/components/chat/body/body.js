import React, { useEffect } from "react";
import Messages from "./messages";
import "./body.scss";

const Body = () => {
    console.log("I'm body");
    const chatEndRef = React.createRef();

    useEffect(() => {
        scrollToBottom();
    });

    const scrollToBottom = () => {
        chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
    };

    return (
        <div className="body" ref={chatEndRef}>
            <Messages />
        </div>
    );
};

export default Body;
