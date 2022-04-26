import React from "react";
import "./header.scss";

const Photo = (props) => {
    return <img className="user__photo" src={props.photoURL} alt="UserPhoto" />;
};

const Name = (props) => {
    const { name, lastSeen } = props;
    return (
        <div className="user__data">
            <div className="user__name">{name}</div>
            <div className="user__last-seen">{lastSeen}</div>
        </div>
    );
};

const Button = () => {
    return (
        <button className="user__setting-button">
            <svg
                width="16"
                height="3"
                viewBox="0 0 16 3"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.67157 2.32843 0 1.5 0C0.671573 0 0 0.67157 0 1.5C0 2.32843 0.671573 3 1.5 3Z" />
                <path d="M8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.67157 8.82843 0 8 0C7.17157 0 6.5 0.67157 6.5 1.5C6.5 2.32843 7.17157 3 8 3Z" />
                <path d="M16 1.5C16 2.32843 15.3284 3 14.5 3C13.6716 3 13 2.32843 13 1.5C13 0.67157 13.6716 0 14.5 0C15.3284 0 16 0.67157 16 1.5Z" />
            </svg>
        </button>
    );
};

const Header = (props) => {
    const { name, photo, lastSeen } = props.userInfo;

    return (
        <header className="user">
            <Photo photoURL={photo} />
            <Name name={name} lastSeen={lastSeen} />
            <Button />
        </header>
    );
};

export default Header;
