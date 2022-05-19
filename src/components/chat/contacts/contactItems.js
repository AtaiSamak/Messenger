import { useContext } from "react";
import { Img } from "../../common";
import { MessageContext } from "../../context";

const ContactItems = ({ contacts }) => {
    const { changeResponder, responder } = useContext(MessageContext);

    const isChoosenResponder = (userID) => {
        return responder && responder.userID === userID
            ? " contact-item_active"
            : "";
    };

    return contacts.map(({ userID, imageURL, fullName, lastMessage }) => (
        <div
            onClick={() => changeResponder(userID)}
            className={`contact-item${isChoosenResponder(userID)}`}
            key={userID}
        >
            <Img
                className={"contact-item__img"}
                width={"42px"}
                height={"42px"}
                borderRadius={"50%"}
                url={imageURL}
            ></Img>
            <div className="contact-item__content">
                <div className="contact-item__name">{fullName}</div>
                <div className="contact-item__last-message">{lastMessage}</div>
            </div>
        </div>
    ));
};

export default ContactItems;
