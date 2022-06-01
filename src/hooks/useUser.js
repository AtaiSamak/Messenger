import { useState, useEffect } from "react";
import { auth } from "../firebase/initApp";
import signOutProfile from "../firebase/signOutProfile";
import authStateListener from "../firebase/authStateListener";
import updateUserInDatabase from "../firebase/database/addUser";

const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = auth.currentUser;
        user ? setUser(user) : authStateListener(setUser);
    }, []);

    const updateUser = () => {
        setUser(auth.currentUser);
    };

    useEffect(() => {
        if (user) {
            const intervalID = setInterval(() => {
                updateUserInDatabase(user);
            }, 5000);

            return () => {
                clearInterval(intervalID);
            };
        }
    }, [user]);

    const handleSignOut = async () => {
        if (await signOutProfile()) setUser(null);
    };

    return [user, updateUser, handleSignOut];
};

export default useUser;
