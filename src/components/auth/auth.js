import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import "./auth.scss";
import Input from "./input";
import Button from "./button";

const Auth = (props) => {
    const [state, setState] = useState({
        status: false,
        buttonText: "Send code",
        inputValue: "",
    });
    const { status, buttonText, inputValue } = state;
    const { onChangeIsLogged } = props;

    const handleClick = (e) => {
        e.preventDefault();
        if (status === true) {
            onChangeIsLogged(true);
            return;
        }
        setState({
            status: true,
            buttonText: "Verify",
            inputValue: "",
        });
    };

    const handleInput = (e) => {
        const { value } = e.target;
        setState({ status: status, buttonText: buttonText, inputValue: value });
    };

    const phoneField = (
        <Input
            handleInput={handleInput}
            value={inputValue}
            placeholder={"Phone"}
            type={"tel"}
            name={"phone"}
        />
    );

    const codeField = (
        <Input
            handleInput={handleInput}
            value={inputValue}
            placeholder={"Code"}
            type={"text"}
            name={"code"}
        />
    );

    return (
        <div className="container auth">
            <div className="auth__wrapper">
                <form className="form">
                    <span className="form__title">Welcome</span>
                    <span className="form__title form__title_icon">
                        <FontAwesomeIcon
                            className="form__icon"
                            icon={faTelegram}
                        />
                    </span>
                    {status ? codeField : phoneField}
                    <div className="button-container">
                        <Button handleClick={handleClick}>{buttonText}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
