import React, { useContext } from "react";
import { MessageContext } from "../../context";
import UserMessage from "./userMessage";
import ResponderMessage from "./responderMessage";
import getFormattedTime from "../../../helpers/getFormattedTime";
import Greeting from "../greeting";

const Messages = () => {
    const { chat, user } = useContext(MessageContext);
    const { messages } = chat;

    const userItem = ({ text, time, isRead }) => (
        <UserMessage
            message={text}
            time={getFormattedTime(time)}
            isRead={isRead}
            key={time}
        />
    );

    const responderItem = ({ text, time }) => (
        <ResponderMessage
            name={"Alex"}
            imageSRC={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
            }
            message={text}
            time={getFormattedTime(time)}
            key={time}
        />
    );

    return messages ? (
        messages.map((message) =>
            message.user === user.phoneNumber
                ? userItem(message)
                : responderItem(message)
        )
    ) : (
        <Greeting>You didn't write to this person</Greeting>
    );
};

export default Messages;
