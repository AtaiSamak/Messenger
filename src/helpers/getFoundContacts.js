const getFoundContacts = (searchValue, contacts) => {
    return contacts.filter(
        (contact) =>
            contact.fullName
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) !== -1
    );
};

export default getFoundContacts;
