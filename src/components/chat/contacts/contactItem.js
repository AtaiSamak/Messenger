import React, { useContext } from "react";
import { Img } from "../../common";
import { MessageContext } from "../../app/app";
import userDefaultPoto from "../../../assets/userDefaultPhoto.png";
import { Transition } from "react-transition-group";
import { MobileContext } from "../mobile";

const duration = 200;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};
const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const CLASSES = {
    activeContact: "contact-item_active",
};

const ContactItem = ({
    phoneNumber,
    displayName,
    phototURL = userDefaultPoto,
    lastMessage,
    isOnline,
}) => {
    const { chat, responder, isMobile } = useContext(MessageContext);
    const mobileFunc = useContext(MobileContext);

    const isActive = responder && responder.phoneNumber === phoneNumber;

    const handleClick = () => {
        if (responder && responder.phoneNumber === phoneNumber && !isMobile)
            return;
        chat.toggle(phoneNumber);
        if (mobileFunc) mobileFunc.goToChat();
    };

    return (
        <div
            onClick={handleClick}
            className={`contact-item ${
                isActive && !isMobile ? CLASSES.activeContact : ""
            }`}
        >
            <div style={{ position: "relative" }}>
                <Img
                    className={"contact-item__img"}
                    width={"42px"}
                    height={"42px"}
                    borderRadius={"50%"}
                    url={phototURL}
                />
                <Transition in={isOnline} timeout={duration}>
                    {(state) => (
                        <div
                            className="contact-item__status"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        ></div>
                    )}
                </Transition>
            </div>
            <div className="contact-item__content">
                <div className="contact-item__name">{displayName}</div>
                <div className="contact-item__last-message">{lastMessage}</div>
            </div>
        </div>
    );
};

export default ContactItem;
