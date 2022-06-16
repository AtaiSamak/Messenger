import React from "react";

const UserInfo = ({ name, lastSeen }) => {
    return (
        <div className="header__data">
            <div className="header__name">{name}</div>
            <div
                className={`header__status${
                    lastSeen === "online" ? " header__status_online" : ""
                }`}
            >
                {lastSeen}
            </div>
        </div>
    );
};

export default UserInfo;
