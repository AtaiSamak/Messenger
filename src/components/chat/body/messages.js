import React, { useContext } from "react";
import { MessageContext } from "../../context";
import UserMessage from "./userMessage";
import ResponderMessage from "./responderMessage";
import getFormattedTime from "../../../helpers/getFormattedTime";

const Messages = () => {
    const { messageList } = useContext(MessageContext);

    const user = ({ text, time, isRead, id }) => (
        <UserMessage
            message={text}
            time={getFormattedTime(time)}
            isRead={isRead}
            key={id}
        />
    );

    const responder = ({ text, time, id }) => (
        <ResponderMessage
            name={"Alex"}
            imageSRC={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
            }
            message={text}
            time={getFormattedTime(time)}
            key={id}
        />
    );

    return messageList.map((message) =>
        message.user === "author" ? user(message) : responder(message)
    );
};

export default Messages;
