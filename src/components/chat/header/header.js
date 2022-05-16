import React from "react";
import { Img } from "../../common";
import { HeaderSettingIcon } from "../../assets/svg";
import { Button } from "../../common";
import getTimeSince from "../../../helpers/getTimeSince";
import "./header.scss";

const Name = (props) => {
    const { name, lastSeen } = props;
    return (
        <div className="user__data">
            <div className="user__name">{name}</div>
            <div className="user__last-seen">last seen {lastSeen} ago</div>
        </div>
    );
};

const Header = ({ userInfo }) => {
    console.log("I'm header");
    const { name, photo, lastSeen } = userInfo;

    return (
        <header className="user">
            <Img
                width={"36px"}
                height={"36px"}
                borderRadius={"50%"}
                url={photo}
            />
            <Name name={name} lastSeen={getTimeSince(lastSeen)} />
            <Button classes={"user__setting-button"}>
                <HeaderSettingIcon></HeaderSettingIcon>
            </Button>
        </header>
    );
};

export default Header;
