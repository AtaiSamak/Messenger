import React, { useContext } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Contacts from "./contacts";
import { MessageContext } from "../context";
import Greeting from "./greeting";
import "./chat.scss";

const Chat = () => {
    console.log("I'm chat");
    const { responder } = useContext(MessageContext);

    const content = (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );

    return (
        <>
            <Contacts />
            <div className="chat">{responder ? content : <Greeting />}</div>
        </>
    );
};

export default Chat;
