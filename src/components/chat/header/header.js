import React, { useContext, useState, useRef } from "react";
import { MessageContext } from "../../app/app";
import { Img, Button } from "../../common";
import { HeaderSettingIcon } from "../../../assets/svg";
import getTimeSince from "../../../helpers/getTimeSince";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Dropdown from "./dropdown.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import UserInfo from "./userInfo";
import { MobileContext } from "../mobile";

const DEVICE_MAP = {
    mobile: ({ children, backToContacts }) => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="header__arrow-left"
                onClick={backToContacts}
            />
            {children}
        </div>
    ),
    desktop: ({ children }) => <>{children}</>,
};

const Header = ({ openModal }) => {
    const [isDropdown, setIsDropdown] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();
    const { responder, friends, chat, isMobile } = useContext(MessageContext);
    const { displayName, photoURL, lastSeen } = responder;
    const DeviceComponent = DEVICE_MAP[isMobile ? "mobile" : "desktop"];
    const mobileFunc = useContext(MobileContext);

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
        if (mobileFunc) mobileFunc.backToContacts();
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
            handleView={openModal}
        />
    ) : null;

    return (
        <header className="header">
            <DeviceComponent
                backToContacts={mobileFunc && mobileFunc.backToContacts}
            >
                <Img
                    width={"36px"}
                    height={"36px"}
                    borderRadius={"50%"}
                    url={photoURL}
                />
                <UserInfo name={displayName} lastSeen={status} />
            </DeviceComponent>
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
