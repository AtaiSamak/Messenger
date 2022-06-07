import React, { useRef, useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Contacts from "./contacts";
import { MessageContext } from "../context";
import Greeting from "./greeting";
import Menu from "./menu";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Modal } from "../common";
import UserSetting from "./userSetting";
import "./chat.scss";
import useModal from "../../hooks/useModal";

const Chat = ({ contextValue }) => {
    const { chat, user } = contextValue;
    const [menu, setMenu] = useState(false);
    const [modalVisible, openModal, closeModal] = useModal(() => {
        setMenu(false);
    });
    const menuRef = useRef();
    const barsRef = useRef();

    useOutsideClick(menuRef, barsRef, () => {
        if (menu) setMenu(false);
    });

    return (
        <MessageContext.Provider value={contextValue}>
            <div className="chat">
                <Menu
                    active={menu}
                    openModal={openModal}
                    handleSignOut={user.signout}
                    ref={menuRef}
                />
                <Modal
                    isActive={modalVisible}
                    handleClose={closeModal}
                    title={"Edit Profile"}
                >
                    <UserSetting handleCancel={closeModal}></UserSetting>
                </Modal>
                <Contacts setMenu={setMenu} ref={{ barsRef }} />
                <div className="chat__content">
                    {chat.data ? (
                        <>
                            <Header />
                            <Body />
                            <Footer />
                        </>
                    ) : (
                        <Greeting>Select a chat to start messaging</Greeting>
                    )}
                </div>
            </div>
        </MessageContext.Provider>
    );
};

export default Chat;
