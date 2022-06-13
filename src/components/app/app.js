import React from "react";
import Chat from "../chat";
import Auth from "../auth";
import useUser from "../../hooks/useUser";

const App = () => {
    const user = useUser();

    return user && user.data ? (
        <Chat user={user} />
    ) : (
        <Auth updateUserData={user.update} />
    );
};

export default App;
