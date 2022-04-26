import React, { Component } from "react";
import "./body.scss";

const checkMark = {
    readed: (
        <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.7931 1.00041L4.63338 8.87892L1.142 5.5396"
                stroke="#81E299"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.74 0.999996L9.57994 8.87892L6.98382 6.42003"
                stroke="#81E299"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    ),
    notReaded: (
        <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.74 0.999996L3.57994 8.87892L0.983823 6.42003"
                stroke="#81E299"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    ),
};

const topVectorTip = (
    <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.999974 0C0.999974 0 6.73791 0 8.19996 0C9.66202 0 9.99994 1.5 8.64994 3C7.29994 4.5 1.49934 9.5 0.999974 11C0.50061 12.5 0.999974 0 0.999974 0Z"
            fill="#007AFF"
        />
    </svg>
);

const topVectorTipResponder = (
    <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9 0C9 0 3.26206 0 1.8 0C0.33795 0 3.14713e-05 1.5 1.35003 3C2.70003 4.5 8.50063 9.5 9 11C9.49936 12.5 9 0 9 0Z"
            fill="#F2F2F7"
        />
    </svg>
);

const UserMessage = (props) => {
    const { message, time, isRead } = props;
    return (
        <div className="user-message user-message_first-message">
            <div className="user-message__text">{message}</div>
            <div className="user-message__time">
                {time}
                <span className="user-message__check-mark">
                    {isRead ? checkMark.readed : checkMark.notReaded}
                </span>
            </div>
            <div className="user-message__top-vector-tip">{topVectorTip}</div>
        </div>
    );
};

const ResponderMessage = ({ name, imageSRC, message, time }) => {
    return (
        <div className="responder-message">
            <div className="responder-message__image ">
                <img src={imageSRC} alt="userImage" />
            </div>
            <div className="responder-message__body">
                <div className="responder-message__name">{name}</div>
                <div className="responder-message__text">{message}</div>
                <div className="responder-message__time">{time}</div>
                <div className="responder-message__top-vector-tip">
                    {topVectorTipResponder}
                </div>
            </div>
        </div>
    );
};

class Body extends Component {
    constructor(props) {
        super(props);
        this.chatEndRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        return (
            <div className="body">
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={
                        "Hello, how are you? I am fine thank you for your attention it's great and go to the school"
                    }
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={"Hello, how are you?"}
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={"Hello, how are you?"}
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={"Hello, how are you?"}
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={"Hello, how are you?"}
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <UserMessage
                    message={"Hello team! my name is Atai"}
                    time={"11:14 AM"}
                    isRead={true}
                />
                <ResponderMessage
                    name={"Alex"}
                    imageSRC={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIASQXsdCNW79UDekq1er9CWhYlt6xCDNYPg&usqp=CAU"
                    }
                    message={"Hello, how are you?"}
                    time={"11:16 AM"}
                />
                <UserMessage
                    message={
                        "Hello team! my name is Atai do you know how to get to react"
                    }
                    time={"11:14 AM"}
                    isRead={false}
                />
                <div ref={this.chatEndRef}></div>
            </div>
        );
    }
}

export default Body;
