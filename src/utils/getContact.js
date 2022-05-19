import getContacts from "./getContacts";

const getContact = (id) => {
    const contacts = getContacts();

    return contacts.find(({ userID }) => userID === id);
};

export default getContact;
