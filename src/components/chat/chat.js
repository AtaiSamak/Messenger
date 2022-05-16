import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Contacts from "./contacts";
import "./chat.scss";

const Chat = ({ userInfo, messageList }) => {
    console.log("I'm chat");
    return (
        <>
            <Contacts />
            <div className="chat">
                <Header userInfo={userInfo} />
                <div className="chat__body">
                    <Body messageList={messageList} />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Chat;
