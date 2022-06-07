import React, { useContext, useState, useRef } from "react";
import { MessageContext } from "../../context";
import { Img, Button } from "../../common";
import { HeaderSettingIcon } from "../../../assets/svg";
import getTimeSince from "../../../helpers/getTimeSince";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Dropdown from "./dropdown.js";
import "./header.scss";

const Name = ({ name, lastSeen }) => {
    return (
        <div className="header__data">
            <div className="header__name">{name}</div>
            <div
                className={`header__status${
                    lastSeen === "online" ? " header__status_online" : ""
                }`}
            >
                {lastSeen}
            </div>
        </div>
    );
};

const Header = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();
    const { responder, friends, chat } = useContext(MessageContext);
    const { displayName, photoURL, lastSeen } = responder;

    const status =
        responder && responder.connections
            ? "online"
            : `last seen ${getTimeSince(lastSeen)} ago`;

    useOutsideClick(dropdownRef, buttonRef, () => {
        toggleDropdown();
    });

    const toggleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    const handleRemove = () => {
        friends.remove(responder.phoneNumber);
        setIsDropdown(false);
        chat.toggle(null);
    };

    const handleClear = () => {
        setIsDropdown(false);
        chat.clearHistory();
    };

    const dropdown = isDropdown ? (
        <Dropdown
            ref={dropdownRef}
            handleRemove={handleRemove}
            handleClear={handleClear}
        />
    ) : null;

    return (
        <header className="header">
            <Img
                width={"36px"}
                height={"36px"}
                borderRadius={"50%"}
                url={photoURL}
            />
            <Name name={displayName} lastSeen={status} />
            <div className="header__setting">
                <Button
                    onClick={toggleDropdown}
                    ref={buttonRef}
                    className={`header__setting-button${
                        isDropdown ? " active" : ""
                    }`}
                >
                    <HeaderSettingIcon></HeaderSettingIcon>
                </Button>
                {dropdown}
            </div>
        </header>
    );
};

export default Header;
