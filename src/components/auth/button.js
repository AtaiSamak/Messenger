import React from "react";

const Button = React.forwardRef(({ handleClick, children }, ref) => (
    <div onClick={handleClick} className="button">
        <div className="button__gradient"></div>
        <button className="button__own" ref={ref}>
            {children}
        </button>
    </div>
));

export default Button;
