import getContacts from "../../../utils/getContacts";
import ContactItems from "./contactItems";
import SearchInput from "./searchInput";
import "./contacts.scss";

const Contacts = () => {
    const contacts = getContacts();

    return (
        <div className="contacts">
            <SearchInput />
            <div className="contacts__body">
                <ContactItems contacts={contacts} />
            </div>
        </div>
    );
};

export default Contacts;
