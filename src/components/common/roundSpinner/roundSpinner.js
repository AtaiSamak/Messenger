import React from "react";
import "./roundSpinner.scss";

const RoundSpinner = ({ color = "#a64bf4" }) => {
    return (
        <div className="lds-roller">
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
            <div style={{ background: color }}></div>
        </div>
    );
};

export default RoundSpinner;
