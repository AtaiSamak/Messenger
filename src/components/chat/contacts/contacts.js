import React, { useContext, useState } from "react";
import SearchInput from "./searchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AddContactForm from "./addContactForm";
import { Modal } from "../../common";
import useModal from "../../../hooks/useModal";
import "./contacts.scss";
import ContactList from "./contactList";
import { MessageContext } from "../../context";

const Contacts = React.forwardRef(({ setMenu }, { barsRef }) => {
    const [inputValue, setInputValue] = useState("");
    const [modalVisible, openModal, closeModal] = useModal();
    const { friends } = useContext(MessageContext);

    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    };

    const openMenu = () => {
        setMenu(true);
    };

    return (
        <div className="contacts">
            <div className="contacts__header">
                <button ref={barsRef} onClick={openMenu}>
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        color={"#8e8e93"}
                    />
                </button>
                <SearchInput value={inputValue} handleChange={onChangeInput} />
            </div>
            <div className="contacts__body">
                <ContactList inputValue={inputValue} friends={friends} />
            </div>
            <div className="contacts__add-button" onClick={openModal}>
                <button type="button">Add contact</button>
            </div>
            <Modal
                isActive={modalVisible}
                handleClose={closeModal}
                title="Add contact"
            >
                <AddContactForm
                    handleClose={closeModal}
                    addFriend={friends.add}
                />
            </Modal>
        </div>
    );
});

export default Contacts;
