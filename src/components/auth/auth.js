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

const INPUT_MAP = {
    phone: ({ handleInput, value, error }) => (
        <Input
            onChange={handleInput}
            value={value}
            placeholder={"Phone" + (error ? " is incorrect" : "")}
            type={"tel"}
            name={"phone"}
            className={error ? "invalid" : ""}
        />
    ),
    code: ({ handleInput, value, error }) => (
        <Input
            onChange={handleInput}
            value={value}
            placeholder={"Code" + (error ? " is incorrect" : "")}
            type={"text"}
            name={"code"}
            className={error ? "invalid" : ""}
        />
    ),
};

const Auth = ({ updateUserData }) => {
    const [value, setValue] = useState("");
    const [field, setField] = useState("phone");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        recaptcha(buttonRef);
    }, []);

    const handleError = () => {
        setLoading(false);
        setError(true);
        setValue("");
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (field === "code") {
            verifyCode(value)
                .then(() => updateUserData())
                .catch(() => {
                    handleError();
                });
            return;
        }
        sendCode(value)
            .then(() => {
                setLoading(false);
                setValue("");
                setField("code");
            })
            .catch(() => {
                handleError();
            });
    };

    const handleInput = ({ target }) => {
        setValue(target.value);
        setError(false);
    };

    const Input = INPUT_MAP[field];

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
                        <Input
                            handleInput={handleInput}
                            value={value}
                            error={error}
                        />
                    )}
                    <div className="button-container">
                        <Button handleClick={handleClick} ref={buttonRef}>
                            {field === "phone" ? "Send code" : "Verify"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
