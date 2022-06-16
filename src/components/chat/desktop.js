import React, { useContext } from "react";
import { MessageContext } from "../app/app";
import Contacts from "./contacts";
import Header from "./header";
import Footer from "./footer";
import Greeting from "./greeting";
const Body = React.lazy(() => import("./body"));

const Desktop = ({ setMenu, barsRef, handleOpen }) => {
    const { chat } = useContext(MessageContext);
    return (
        <>
            <Contacts setMenu={setMenu} ref={{ barsRef }} />
            <div className="chat__content">
                {chat.data ? (
                    <>
                        <Header openModal={handleOpen} />
                        <Body />
                        <Footer />
                    </>
                ) : (
                    <Greeting>Select a chat to start messaging</Greeting>
                )}
            </div>
        </>
    );
};

export default Desktop;
