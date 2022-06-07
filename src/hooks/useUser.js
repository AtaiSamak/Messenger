import { useState, useEffect } from "react";
import { auth } from "../firebase/initApp";
import signOutProfile from "../firebase/signOutProfile";
import authStateListener from "../firebase/authStateListener";
import updateUserInDatabase from "../firebase/database/updateUser";
import presenceListener from "../firebase/database/presenceListener";

const useUser = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const user = auth.currentUser;
        user ? setData(user) : authStateListener(setData);
        console.log("useUserEffect");
    }, []);

    useEffect(() => {
        if (data) updateUserInDatabase(data);
        presenceListener();
        console.log("useUserEffect2");
    }, [data]);

    const update = () => {
        setData(auth.currentUser);
    };

    const signout = async () => {
        if (await signOutProfile()) {
            localStorage.clear();
            setData(null);
        }
    };

    return { data, update, signout };
};

export default useUser;
