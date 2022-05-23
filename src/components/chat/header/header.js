import React, { useContext, useState, useRef } from "react";
import { MessageContext } from "../../context";
import { Img, Button } from "../../common";
import { HeaderSettingIcon } from "../../../assets/svg";
import getTimeSince from "../../../helpers/getTimeSince";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Dropdown from "./dropdown.js";
import "./header.scss";

const Name = (props) => {
    const { name, lastSeen } = props;
    return (
        <div className="header__data">
            <div className="header__name">{name}</div>
            <div className="header__last-seen">last seen {lastSeen} ago</div>
        </div>
    );
};

const Header = () => {
    const { responder } = useContext(MessageContext);
    const [isDropdown, setIsDropdown] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();

    useOutsideClick(dropdownRef, buttonRef, () => {
        toggleDropdown();
    });

    const toggleDropdown = (e) => {
        setIsDropdown(!isDropdown);
    };

    const { fullName, imageURL, lastSeen } = responder;

    const dropdown = isDropdown ? <Dropdown ref={dropdownRef} /> : null;

    return (
        <header className="header">
            <Img
                width={"36px"}
                height={"36px"}
                borderRadius={"50%"}
                url={imageURL}
            />
            <Name name={fullName} lastSeen={getTimeSince(lastSeen)} />
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
