import React, { useMemo, useState } from "react";
import getContacts from "../../../utils/getContacts";
import ContactItem from "./contactItem";
import SearchInput from "./searchInput";
import getFoundContacts from "../../../helpers/getFoundContacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./contacts.scss";

const Contacts = React.forwardRef(({ setMenu }, { barsRef }) => {
    const [inputValue, setInputValue] = useState("");
    const [contacts] = useState(getContacts());

    const foundContacts = useMemo(
        () => getFoundContacts(inputValue, contacts),
        [contacts, inputValue]
    );

    const onChangeInput = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const openMenu = () => {
        setMenu(true);
    };

    const contactItems = foundContacts.map((contact) => (
        <ContactItem {...contact} key={contact.userID}></ContactItem>
    ));

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
            <div className="contacts__body">{contactItems}</div>
            <div className="contacts__add-button">
                <button>Add contact</button>
            </div>
        </div>
    );
});

export default Contacts;
