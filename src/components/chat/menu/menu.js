import React from "react";
import UserInfo from "./userInfo";
import MenuItem from "./menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faMoon,
    faRightFromBracket as faLogout,
    faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.scss";

const Menu = React.forwardRef(({ isActive, openModal }, ref) => (
    <div ref={ref} className={"menu" + (isActive ? " active" : " disable")}>
        <UserInfo></UserInfo>
        <div className="menu__list">
            <MenuItem
                onClick={openModal}
                color={"#f4c430"}
                icon={faUser}
                label={"Edit profile"}
            />
            <MenuItem color={"#6a5acd"} icon={faMoon} label={"Night mode"}>
                <div
                    className="menu__toggle-button"
                    style={{
                        flexGrow: "1",
                        display: "flex",
                        justifyContent: "right",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faToggleOff}
                        color="#8e8e93"
                        style={{
                            width: "28px",
                            height: "28px",
                        }}
                    />
                </div>
            </MenuItem>
            <MenuItem color={"#c54b8c"} icon={faLogout} label={"Logout"} />
        </div>
        <div className="menu__footer">
            <div className="menu__app-name">Messenger Web</div>
            <div className="menu__app-version">Version 0.0.0</div>
        </div>
    </div>
));

export default Menu;
