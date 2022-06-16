import React, { useRef, useState } from "react";
import { MessageContext } from "../app/app";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./chat.scss";
import useModal from "../../hooks/useModal";
import useFriends from "../../hooks/useFriends";
import useChat from "../../hooks/useChat";
import Desktop from "./desktop";
import Mobile from "./mobile";
const Menu = React.lazy(() => import("./menu"));
const ModalComponent = React.lazy(() =>
    import("./modalComponent/modalComponent")
);

const DEVICE_MAP = {
    desktop: ({ setMenu, barsRef, handleOpenModal }) => (
        <Desktop
            setMenu={setMenu}
            barsRef={barsRef}
            handleOpen={handleOpenModal("view")}
        />
    ),
    mobile: ({ setMenu, barsRef, handleOpenModal }) => (
        <Mobile
            setMenu={setMenu}
            barsRef={barsRef}
            handleOpen={handleOpenModal("view")}
        />
    ),
};

const Chat = ({ user, isMobile }) => {
    const friends = useFriends((user && user.data) || null);
    const { responder, ...chat } = useChat({
        user: (user && user.data) || null,
        friends: friends.data || null,
    });
    const [menu, setMenu] = useState(false);
    const [modalType, setModalType] = useState("edit");
    const [modalVisible, openModal, closeModal] = useModal(() => {
        setMenu(false);
    });
    const menuRef = useRef();
    const barsRef = useRef();

    useOutsideClick(menuRef, barsRef, () => {
        if (menu) setMenu(false);
    });

    const handleOpenModal = (type) => () => {
        setModalType(type);
        openModal();
    };

    const Device = DEVICE_MAP[isMobile ? "mobile" : "desktop"];

    return (
        <MessageContext.Provider
            value={{ chat, user, friends, responder, isMobile }}
        >
            <div className="chat">
                <Menu
                    active={menu}
                    openModal={handleOpenModal("edit")}
                    handleSignOut={user.signout}
                    ref={menuRef}
                />
                <ModalComponent
                    isActive={modalVisible}
                    handleClose={closeModal}
                    type={modalType}
                />
                <Device
                    setMenu={setMenu}
                    barsRef={barsRef}
                    handleOpenModal={handleOpenModal}
                />
            </div>
        </MessageContext.Provider>
    );
};

export default Chat;
