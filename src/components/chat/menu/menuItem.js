import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ icon, label, color, children, ...props }) => {
    return (
        <div className="menu-item" {...props}>
            <div className="menu-item__icon" style={{ backgroundColor: color }}>
                <FontAwesomeIcon
                    icon={icon}
                    color="#fff"
                    style={{ width: "24px", height: "24px" }}
                />
            </div>
            <div className="menu-item__text">
                <span>{label}</span>
                {children}
            </div>
        </div>
    );
};

export default MenuItem;
