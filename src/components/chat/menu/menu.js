import React from "react";
import UserInfo from "./userInfo";
import MenuItem from "./menuItem";
import {
    faUser,
    faRightFromBracket as faLogout,
} from "@fortawesome/free-solid-svg-icons";
import useExpire from "../../../hooks/useExpire";
import Toggle from "./toggle";
import "./menu.scss";

const Menu = React.forwardRef(({ active, openModal, handleSignOut }, ref) => {
    const visible = useExpire(active, 500);

    return visible ? (
        <>
            <div className={"chat_blackout" + (active ? "" : " disable")}></div>
            <div ref={ref} className={"menu" + (active ? "" : " disable")}>
                <UserInfo></UserInfo>
                <div className="menu__list">
                    <MenuItem
                        onClick={openModal}
                        color={"#f4c430"}
                        icon={faUser}
                        label={"Edit profile"}
                    />
                    <Toggle />
                    <MenuItem
                        onClick={handleSignOut}
                        color={"#c54b8c"}
                        icon={faLogout}
                        label={"Logout"}
                    />
                </div>
                <div className="menu__footer">
                    <div className="menu__app-name">Messenger Web</div>
                    <div className="menu__app-version">Version 0.0.0</div>
                </div>
            </div>
        </>
    ) : null;
});

export default Menu;
