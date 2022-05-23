import React, { useContext, useRef, useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Contacts from "./contacts";
import { MessageContext } from "../context";
import Greeting from "./greeting";
import Menu from "./menu";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Expire } from "../common";
import Modal from "../common/modal";
import UserSetting from "./userSetting";
import "./chat.scss";

const Chat = () => {
    const { responder } = useContext(MessageContext);
    const [menu, setMenu] = useState(true);
    const [modal, setModal] = useState(false);
    const menuRef = useRef();
    const barsRef = useRef();

    useOutsideClick(menuRef, barsRef, () => {
        if (menu) setMenu(false);
    });

    const openModal = () => {
        setModal(true);
        setMenu(false);
    };

    const closeModal = () => {
        setModal(false);
    };

    const content = (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );

    const asideMenu = menu ? (
        <>
            <div className="chat_blackout"></div>
            <Menu openModal={openModal} ref={menuRef} isActive={menu} />
        </>
    ) : (
        <Expire delay="500">
            <div className="chat_blackout disable"></div>
            <Menu ref={menuRef} isActive={menu} />
        </Expire>
    );

    return (
        <div className="chat">
            {asideMenu}
            <Modal
                isActive={modal}
                handleClose={closeModal}
                title={"Edit Profile"}
            >
                <UserSetting></UserSetting>
            </Modal>
            <Contacts setMenu={setMenu} ref={{ barsRef }} />
            <div className="chat__content">
                {responder ? content : <Greeting />}
            </div>
        </div>
    );
};

export default Chat;
