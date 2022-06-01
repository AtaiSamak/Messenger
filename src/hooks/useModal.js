import { useState } from "react";

const useModal = (openCallback, closeCallback) => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        if (openCallback) openCallback();
        setVisible(true);
    };

    const closeModal = () => {
        if (closeCallback) closeCallback();
        setVisible(false);
    };

    return [visible, openModal, closeModal];
};

export default useModal;
