import React, { createContext } from "react";
import Chat from "../chat";
import Auth from "../auth";
import useUser from "../../hooks/useUser";
import useMobile from "../../hooks/useMobile";
import ThemeProvider from "../providers/themeProvider";

const App = () => {
    const user = useUser();
    const isMobile = useMobile();

    return (
        <ThemeProvider>
            {user && user.data ? (
                <Chat user={user} isMobile={isMobile} />
            ) : (
                <Auth updateUserData={user.update} />
            )}
        </ThemeProvider>
    );
};

const MessageContext = createContext();
export { MessageContext };
export default App;
