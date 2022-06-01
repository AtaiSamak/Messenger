import React from "react";

const Greeting = ({ children }) => {
    return (
        <div className="greeting">
            <div className="greeting__text">{children}</div>
        </div>
    );
};

export default Greeting;
