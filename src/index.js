import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./index.scss";

const userInfo = {
    name: "👑 Atai Samakov",
    lastSeen: 1652731186536,
    photo: "https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App userInfo={userInfo} />
    </React.StrictMode>
);
