import React, { createContext, useContext, useEffect, useState } from "react";
import Contacts from "./contacts";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { MessageContext } from "../app/app";

const WINDOW = {
    contacts: "contacts",
    chat: "chat",
};

const Mobile = ({ setMenu, barsRef, handleOpen }) => {
    const [window, setWindow] = useState(WINDOW.contacts);

    const backToContacts = () => {
        setWindow(WINDOW.contacts);
    };

    const goToChat = () => {
        setWindow(WINDOW.chat);
    };

    return (
        <MobileContext.Provider value={{ goToChat, backToContacts }}>
            {window === WINDOW.contacts ? (
                <Contacts setMenu={setMenu} ref={{ barsRef }} />
            ) : (
                <div className="chat__content">
                    <Header openModal={handleOpen} />
                    <Body />
                    <Footer />
                </div>
            )}
        </MobileContext.Provider>
    );
};

const MobileContext = createContext();
export { MobileContext };
export default Mobile;
