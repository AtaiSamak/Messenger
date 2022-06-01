import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Input from "./input";
import Button from "./button";
import recaptcha from "../../firebase/recaptcha";
import "./auth.scss";
import verifyCode from "../../firebase/verifyCode";
import sendCode from "../../firebase/sendCode";
import { RoundSpinner } from "../common";

const Auth = ({ updateUserData }) => {
    const [state, setState] = useState({
        isCodeField: false,
        buttonText: "Send code",
        inputValue: "",
        invalidCode: false,
    });
    const [loading, setLoading] = useState(false);
    const { isCodeField, buttonText, inputValue, invalidCode } = state;
    const buttonRef = useRef();

    useEffect(() => {
        recaptcha(buttonRef);
    }, []);

    const setVerifyCodeState = () => {
        setState({
            isCodeField: true,
            buttonText: "Verify",
            inputValue: "",
            invalidCode: false,
        });
    };

    const setInvalidCodeState = () => {
        setState({
            isCodeField: true,
            buttonText: "Verify",
            inputValue: "",
            invalidCode: true,
        });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (isCodeField === true) {
            const user = await verifyCode(inputValue);
            if (user) updateUserData();
            setLoading(false);
            setInvalidCodeState();
            return;
        }
        if (await sendCode(inputValue)) {
            setLoading(false);
            setVerifyCodeState();
        }
    };

    const handleInput = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            inputValue: value,
            invalidCode: false,
        });
    };

    const phoneField = (
        <Input
            onChange={handleInput}
            value={inputValue}
            placeholder={"Phone"}
            type={"tel"}
            name={"phone"}
        />
    );

    const codeField = (
        <Input
            onChange={handleInput}
            value={inputValue}
            placeholder={"Code" + (invalidCode ? " is incorrect" : "")}
            type={"text"}
            name={"code"}
            className={invalidCode ? "invalid" : ""}
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
                    {loading ? (
                        <RoundSpinner />
                    ) : (
                        <>{isCodeField ? codeField : phoneField}</>
                    )}
                    <div className="button-container">
                        <Button handleClick={handleClick} ref={buttonRef}>
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
