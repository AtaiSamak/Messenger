import { useState, useEffect } from "react";
import friendsListener from "../firebase/database/friendsListener";
import updateFriend from "../firebase/database/updateFriend";
import removeFriend from "../firebase/database/removeFriend";
import removeListener from "../firebase/database/removeListener";

const useFriends = (user) => {
    const [data, setData] = useState([]);
    const [listeners, setListeners] = useState(null);

    useEffect(() => {
        if (user) {
            (async () => {
                setListeners(await friendsListener(setData));
                console.log("set friend listeners");
            })();
        }
    }, [user]);

    useEffect(() => {
        return () => {
            if (listeners) removeListener(...listeners);
        };
    }, [listeners]);

    const add = (phoneNumber) => {
        updateFriend(phoneNumber).catch((error) => alert(error));
    };

    const remove = (phoneNumber) => {
        removeFriend(phoneNumber);
    };

    return { data, add, remove };
};

export default useFriends;
