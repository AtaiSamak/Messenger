import React, { useState, useCallback, useEffect } from "react";
import getFoundContacts from "../../../helpers/getFoundContacts";
import ContactItem from "./contactItem";
import { RoundSpinner } from "../../common";

const ContactList = ({ inputValue, friends }) => {
    const [friendItems, setFriendItems] = useState(null);

    const getFriendItems = useCallback(() => {
        const foundFriends = getFoundContacts(inputValue, friends.data);

        return foundFriends.map(
            ({ displayName, phoneNumber, photoURL, uid }) => (
                <ContactItem
                    displayName={displayName}
                    phoneNumber={phoneNumber}
                    phototURL={photoURL}
                    uid={uid}
                    key={uid}
                />
            )
        );
    }, [inputValue, friends.data]);

    useEffect(() => {
        setFriendItems(getFriendItems());
    }, [getFriendItems]);

    const message = {
        notFriend: <h4 className="contacts__no-friends">Please add friends</h4>,
        notFound: <h4 className="contacts__no-friends">Not found</h4>,
    };

    const isFoundFriends = friendItems && friendItems.length !== 0;
    const friendsContent = isFoundFriends ? friendItems : message.notFound;
    const content = friends.data ? friendsContent : message.notFriend;

    return friends.loading ? <RoundSpinner color="#b0b0b0" /> : content;
};

export default ContactList;
