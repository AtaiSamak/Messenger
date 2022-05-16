import React, { useContext, useState } from "react";
import { MessageContext } from "../../context";
import { EmojiIcon, TelegramIcon, MentionIcon } from "../../assets/svg";
import { Button } from "../../common";
import Picker from "emoji-picker-react";
import "./footer.scss";

const pickerStyle = {
    width: "100%",
    position: "absolute",
    bottom: "0",
    zIndex: "10",
};

const Footer = () => {
    console.log("I'm footer");
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
        sendMessage(inputValue);
        clearInputValue();
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            send();
        }
    };

    const picker = (
        <Picker pickerStyle={pickerStyle} onEmojiClick={onEmojiClick} />
    );

    return (
        <>
            {pickerVisible ? picker : null}
            <div className="footer">
                <Button
                    classes={"footer__button "}
                    handleClick={togglePickerVisible}
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
                <Button classes={"footer__button"}>
                    <MentionIcon />
                </Button>
                <Button
                    handleClick={send}
                    classes={"footer__button footer__button_telegram"}
                >
                    <TelegramIcon />
                </Button>
            </div>
        </>
    );
};

export default Footer;
