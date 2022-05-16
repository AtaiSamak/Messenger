import { TopVectorTipResponderIcon } from "../../assets/svg";

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
                    {<TopVectorTipResponderIcon />}
                </div>
            </div>
        </div>
    );
};

export default ResponderMessage;
