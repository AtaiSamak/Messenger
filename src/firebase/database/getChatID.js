import { auth } from "../initApp";

const getChatID = (friendPhone) => {
    const userPhone = auth.currentUser.phoneNumber.slice(1);
    if (friendPhone[0] === "+") {
        friendPhone = friendPhone.slice(1);
    }
    const chatID =
        parseInt(userPhone) > parseInt(friendPhone)
            ? userPhone.toString() + friendPhone.toString()
            : friendPhone.toString() + userPhone.toString();
    return chatID;
};

export default getChatID;
