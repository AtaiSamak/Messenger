import { useState, useEffect } from "react";
import getFriends from "../firebase/database/getFriends";
import addFriend from "../firebase/database/addFriend";
import removeFriend from "../firebase/database/removeFriend";

const useFriends = (user) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            (async () => {
                const friends = await getFriends();
                setLoading(false);
                setData(friends);
            })();
        }
    }, [user]);

    const update = async (callback) => {
        setLoading(true);
        await callback();
        setData(await getFriends());
        setLoading(false);
    };

    const add = async (phoneNumber) => {
        update(async () => await addFriend(phoneNumber));
    };

    const remove = async (phoneNumber) => {
        update(async () => await removeFriend(phoneNumber));
    };

    return { data, loading, add, remove };
};

export default useFriends;
