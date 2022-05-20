import React from "react";
import "./spinner.scss";

const Spinner = ({ style }) => {
    return (
        <div style={style} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
