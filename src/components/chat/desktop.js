import React, { useContext } from "react";
import { MessageContext } from "../app/app";
import Contacts from "./contacts";
import Header from "./header";
import Footer from "./footer";
import Greeting from "./greeting";
import Body from "./body";

const Desktop = ({ setMenu, barsRef, handleOpen }) => {
    const { responder } = useContext(MessageContext);
    return (
        <>
            <Contacts setMenu={setMenu} ref={{ barsRef }} />
            <div className="chat__content">
                {responder ? (
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
