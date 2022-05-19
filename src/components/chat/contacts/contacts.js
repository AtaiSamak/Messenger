import { useState } from "react";
import getContacts from "../../../utils/getContacts";
import ContactItems from "./contactItems";
import SearchInput from "./searchInput";
import getFoundContacts from "../../../helpers/getFoundContacts";
import "./contacts.scss";

const Contacts = () => {
    const [inputValue, setInputValue] = useState("");
    const contacts = getContacts();

    const onChangeInput = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className="contacts">
            <SearchInput value={inputValue} handleChange={onChangeInput} />
            <div className="contacts__body">
                <ContactItems
                    contacts={getFoundContacts(inputValue, contacts)}
                />
            </div>
            <div className="contacts__add-button">
                <button>Add contact</button>
            </div>
        </div>
    );
};

export default Contacts;
