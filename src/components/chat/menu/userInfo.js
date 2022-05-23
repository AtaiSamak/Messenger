import React from "react";
import { Img } from "../../common";

const UserInfo = () => {
    return (
        <div className="user-info">
            <Img
                width={"56px"}
                height={"56px"}
                borderRadius={"50%"}
                url={
                    "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1"
                }
            ></Img>
            <div className="user-info__data">
                <div className="user-info__name">Atai Samakov</div>
                <div className="user-info__phone-number">+7999223344</div>
            </div>
        </div>
    );
};

export default UserInfo;
