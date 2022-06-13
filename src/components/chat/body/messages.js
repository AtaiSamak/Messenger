import React, { useContext } from "react";
import { MessageContext } from "../../context";
import UserMessage from "./userMessage";
import ResponderMessage from "./responderMessage";
import getFormattedTime from "../../../helpers/getFormattedTime";
import Greeting from "../greeting";

const Messages = () => {
    const { chat, user, responder } = useContext(MessageContext);
    const { messages } = chat.data;

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
            name={responder.displayName}
            imageSRC={responder.photoURL}
            message={text}
            time={getFormattedTime(time)}
            key={time}
        />
    );

    return messages ? (
        messages.map((message) =>
            message.user === (user.data && user.data.phoneNumber)
                ? userItem(message)
                : responderItem(message)
        )
    ) : (
        <Greeting>You didn't write to this person</Greeting>
    );
};

export default Messages;
