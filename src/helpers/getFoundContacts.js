const getFoundContacts = (searchValue, contacts) => {
    if (!contacts) return [];
    return contacts.filter(
        (contact) =>
            contact.displayName
                .toLowerCase()
                .indexOf(searchValue.toLowerCase()) !== -1
    );
};

export default getFoundContacts;
