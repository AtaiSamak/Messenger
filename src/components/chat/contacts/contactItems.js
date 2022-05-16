import { Img } from "../../common";

const ContactItems = ({ contacts }) => {
    return contacts.map(({ userID, imageURL, userName, lastMessage }) => (
        <div className="contact-item" key={userID}>
            <Img
                className={"contact-item__img"}
                width={"42px"}
                height={"42px"}
                borderRadius={"50%"}
                url={imageURL}
            ></Img>
            <div className="contact-item__content">
                <div className="contact-item__name">{userName}</div>
                <div className="contact-item__last-message">{lastMessage}</div>
            </div>
        </div>
    ));
};

export default ContactItems;
