import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext, themes } from "../../providers/themeProvider";

const DropdownItem = ({ children, className, ...props }) => {
    return (
        <button
            className={"dropdown__item" + (className ? " " + className : "")}
            {...props}
        >
            {children}
        </button>
    );
};

const Dropdown = React.forwardRef(
    ({ handleRemove, handleClear, handleView }, ref) => {
        const { theme } = useContext(ThemeContext);
        return (
            <div className="dropdown" ref={ref}>
                <DropdownItem onClick={handleView}>
                    <FontAwesomeIcon
                        width={"14px"}
                        height={"14px"}
                        icon={faUser}
                        color={theme === themes.dark ? "#fff" : "#2c2c2e"}
                    />
                    <span>View profile</span>
                </DropdownItem>
                <DropdownItem onClick={handleClear}>
                    <FontAwesomeIcon
                        width={"14px"}
                        height={"14px"}
                        icon={faEraser}
                        color={theme === themes.dark ? "#fff" : "#2c2c2e"}
                    />
                    <span>Clear history</span>
                </DropdownItem>
                <DropdownItem
                    className="dropdown__item_red-text"
                    onClick={handleRemove}
                >
                    <FontAwesomeIcon
                        width={"14px"}
                        height={"14px"}
                        icon={faTrash}
                        color={"#ff355e"}
                    />
                    <span>Delete contact</span>
                </DropdownItem>
            </div>
        );
    }
);

export default Dropdown;
