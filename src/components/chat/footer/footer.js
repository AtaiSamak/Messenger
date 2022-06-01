import React, { useContext, useState } from "react";
import { MessageContext } from "../../context";
import { EmojiIcon, TelegramIcon, MentionIcon } from "../../../assets/svg";
import { Button } from "../../common";
import "./footer.scss";
import Spinner from "../../common/spinner/spinner";

const Picker = React.lazy(() => import("emoji-picker-react"));

const pickerStyle = {
    width: "100%",
    height: "100%",
};

const Footer = () => {
    const { sendMessage } = useContext(MessageContext);
    const [inputValue, setInputValue] = useState("");
    const [pickerVisible, setPickerVisible] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setInputValue(inputValue + emojiObject.emoji);
    };

    const togglePickerVisible = () => {
        setPickerVisible(!pickerVisible);
    };

    const handleInput = (e) => {
        const text = e.target.value;
        setInputValue(text);
    };

    const clearInputValue = () => {
        setInputValue("");
    };

    const send = () => {
        if (!inputValue) return;
        sendMessage(inputValue);
        clearInputValue();
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            send();
        }
    };

    const picker = (
        <React.Suspense fallback={<Spinner />}>
            <Picker pickerStyle={pickerStyle} onEmojiClick={onEmojiClick} />
        </React.Suspense>
    );

    return (
        <>
            {pickerVisible ? picker : null}
            <div className="footer">
                <Button
                    className={
                        "footer__button" + (pickerVisible ? " active" : "")
                    }
                    onClick={togglePickerVisible}
                >
                    <EmojiIcon />
                </Button>
                <input
                    onChange={handleInput}
                    value={inputValue}
                    className="footer__input"
                    placeholder="Start typing..."
                    type="text"
                    onKeyUp={handleKeyUp}
                />
                <Button className="footer__button">
                    <MentionIcon />
                </Button>
                <Button
                    onClick={send}
                    className="footer__button footer__button_telegram"
                >
                    <TelegramIcon />
                </Button>
            </div>
        </>
    );
};

export default Footer;
