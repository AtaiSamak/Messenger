import React from "react";
import { Modal } from "../../common";
import UserSetting from "./userSetting";
import ViewProfile from "./viewProfile";

const MODAL_MAP = {
    edit: ({ handleCancel }) => (
        <UserSetting handleCancel={handleCancel}></UserSetting>
    ),
    view: () => <ViewProfile />,
};

const ModalComponent = ({ isActive, handleClose, type }) => {
    const Content = MODAL_MAP[type];

    return (
        <Modal
            isActive={isActive}
            handleClose={handleClose}
            title={type === "edit" ? "Edit profile" : "Profile"}
        >
            <Content handleCancel={handleClose}></Content>
        </Modal>
    );
};

export default ModalComponent;
