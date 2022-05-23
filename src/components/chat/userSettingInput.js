import React, { useState } from "react";

const UserSettingInput = ({ label, value, setValue }) => {
    const [labelClass, setLabelClass] = useState("user-setting__label");

    const handleFocus = () => {
        setLabelClass("user-setting__label user-setting__label_active");
    };

    const handleBlur = () => {
        setLabelClass("user-setting__label");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <label className={labelClass}>
            <span>{label}</span>
            <br />
            <input
                className="user-setting__input"
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={value}
                onChange={handleChange}
            ></input>
        </label>
    );
};
export default UserSettingInput;
