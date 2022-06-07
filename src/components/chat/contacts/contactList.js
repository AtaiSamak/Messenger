import React, { useState, useCallback, useEffect } from "react";
import getFoundContacts from "../../../helpers/getFoundContacts";
import ContactItem from "./contactItem";
import { RoundSpinner } from "../../common";

const ContactList = ({ inputValue, friends }) => {
    const [friendItems, setFriendItems] = useState(null);

    const getFriendItems = useCallback(() => {
        if (friends) {
            const foundFriends = getFoundContacts(inputValue, friends);
            return foundFriends.map(
                ({ displayName, phoneNumber, photoURL }) => (
                    <ContactItem
                        displayName={displayName}
                        phoneNumber={phoneNumber}
                        phototURL={photoURL}
                        key={phoneNumber}
                    />
                )
            );
        }
    }, [inputValue, friends]);

    useEffect(() => {
        setFriendItems(getFriendItems());
    }, [getFriendItems]);

    const message = {
        notFriend: <h4 className="contacts__no-friends">Please add friends</h4>,
        notFound: <h4 className="contacts__no-friends">Not found</h4>,
    };

    const isFoundFriends = friendItems && friendItems.length !== 0;
    const friendsContent = isFoundFriends ? friendItems : message.notFound;
    const content = friends ? friendsContent : message.notFriend;

    return friends ? content : <RoundSpinner color="#b0b0b0" />;
};

export default ContactList;
