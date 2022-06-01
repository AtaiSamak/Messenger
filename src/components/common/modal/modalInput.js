import React, { useState } from "react";
import "./modalInput.scss";

const ModalInput = ({ pattern = /./, label, value, setValue, ...props }) => {
    const [labelClass, setLabelClass] = useState("modal-input__label");

    const handleFocus = () => {
        setLabelClass("modal-input__label modal-input__label_active");
    };

    const handleBlur = () => {
        setLabelClass("modal-input__label");
    };

    const handleChange = ({ target }) => {
        if (target.value === "") {
            setValue("");
        } else if (pattern.test(target.value)) {
            setValue(target.value);
        }
    };

    return (
        <label className={labelClass}>
            <span>{label}</span>
            <br />
            <input
                className="modal-input__input"
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={value}
                onChange={handleChange}
                {...props}
            ></input>
        </label>
    );
};
export default ModalInput;
