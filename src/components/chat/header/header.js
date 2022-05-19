import React, { useContext, useState, Suspense, useRef } from "react";
import { MessageContext } from "../../context";
import { Img, Button } from "../../common";
import { HeaderSettingIcon } from "../../../assets/svg";
import getTimeSince from "../../../helpers/getTimeSince";
import useOutsideClick from "../../../hooks/useOutsideClick";
import "./header.scss";

const Dropdown = React.lazy(() => import("./dropdown.js"));

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
    console.log("I'm header");
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

    const dropdown = isDropdown ? (
        <Suspense fallback={<div>loading</div>}>
            <Dropdown ref={dropdownRef} />
        </Suspense>
    ) : null;

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
