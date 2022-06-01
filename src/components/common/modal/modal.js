import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./modal.scss";

const Modal = ({ isActive, handleClose, title, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return isActive ? (
        <div className="modal">
            <div className="modal__main" ref={modalRef}>
                <div className="modal__title">
                    <span>{title}</span>{" "}
                    <button onClick={handleClose}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div className="modal__content">{children}</div>
            </div>
        </div>
    ) : null;
};
export default Modal;
