import {
    MessageIsNotReadIcon,
    MessageIsReadIcon,
    TopVectorTipIcon,
} from "../../../assets/svg";

const UserMessage = (props) => {
    const { message, time, isRead } = props;
    return (
        <div className="user-message user-message_first-message">
            <div className="user-message__text">{message}</div>
            <div className="user-message__time">
                {time}
                <span className="user-message__check-mark">
                    {isRead ? <MessageIsReadIcon /> : <MessageIsNotReadIcon />}
                </span>
            </div>
            <div className="user-message__top-vector-tip">
                {<TopVectorTipIcon />}
            </div>
        </div>
    );
};

export default UserMessage;
