const getConvertedMessages = ({ user, text, messages }) => {
    const currentTime = new Date();
    const newMessage = {
        user: user.phoneNumber,
        text: text,
        time: currentTime.getTime(),
        isRead: false,
    };

    return messages ? [...messages, newMessage] : [newMessage];
};

export default getConvertedMessages;
