import React, { useState } from "react";
import "./input.scss";

const Input = ({ className, placeholder, ...props }) => {
    const [isFocus, setIsFocus] = useState(false);

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = (el) => {
        if (el.target.value) {
            return;
        }
        setIsFocus(false);
    };

    const focusClass = `input__focus ${isFocus ? "input__focus_active" : ""}`;

    return (
        <div className={"input" + (className ? ` ${className}` : "")}>
            <input
                className="input__field"
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
            <span className={focusClass} data-placeholder={placeholder}></span>
        </div>
    );
};

export default Input;
