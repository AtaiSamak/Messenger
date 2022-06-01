import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

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

const Dropdown = React.forwardRef(({ removeFriend }, ref) => (
    <div className="dropdown" ref={ref}>
        <DropdownItem>
            <FontAwesomeIcon
                width={"14px"}
                height={"14px"}
                icon={faUser}
                color={"#2c2c2e"}
            />
            <span>View profile</span>
        </DropdownItem>
        <DropdownItem>
            <FontAwesomeIcon
                width={"14px"}
                height={"14px"}
                icon={faEraser}
                color={"#2c2c2e"}
            />
            <span>Clear history</span>
        </DropdownItem>
        <DropdownItem
            className="dropdown__item_red-text"
            onClick={removeFriend}
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
));

export default Dropdown;
