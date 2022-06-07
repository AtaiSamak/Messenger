import React, { useContext } from "react";
import { Img } from "../../common";
import { MessageContext } from "../../context";
import userDefaultPoto from "../../../assets/userDefaultPhoto.png";

const ContactItem = ({
    phoneNumber,
    displayName,
    phototURL = userDefaultPoto,
}) => {
    const { chat, responder } = useContext(MessageContext);

    const isChoosenResponder =
        responder && responder.phoneNumber === phoneNumber
            ? "contact-item_active"
            : "";

    const handleClick = () => {
        if (responder && phoneNumber === responder.phoneNumber) return;
        chat.toggle(phoneNumber);
    };

    return (
        <div
            onClick={handleClick}
            className={`contact-item ${isChoosenResponder}`}
        >
            <Img
                className={"contact-item__img"}
                width={"42px"}
                height={"42px"}
                borderRadius={"50%"}
                url={phototURL}
            ></Img>
            <div className="contact-item__content">
                <div className="contact-item__name">{displayName}</div>
                <div className="contact-item__last-message">{}</div>
            </div>
        </div>
    );
};

export default ContactItem;
