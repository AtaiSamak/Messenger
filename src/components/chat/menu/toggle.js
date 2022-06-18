import React, { useContext } from "react";
import MenuItem from "./menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faToggleOff,
    faToggleOn,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext, themes } from "../../providers/themeProvider";

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    };

    return (
        <MenuItem
            color={"#6a5acd"}
            icon={faMoon}
            label={"Night mode"}
            onClick={handleClick}
        >
            <div
                className="menu__toggle-button"
                style={{
                    flexGrow: "1",
                    display: "flex",
                    justifyContent: "right",
                }}
            >
                <FontAwesomeIcon
                    icon={theme === themes.dark ? faToggleOn : faToggleOff}
                    color={theme === themes.dark ? "#4682b4" : "#8e8e93"}
                    style={{
                        width: "28px",
                        height: "28px",
                    }}
                />
            </div>
        </MenuItem>
    );
};

export default Toggle;
