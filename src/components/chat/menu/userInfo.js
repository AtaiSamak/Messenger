import React, { useContext } from "react";
import { Img } from "../../common";
import { MessageContext } from "../../app/app";

const UserInfo = () => {
    const { user } = useContext(MessageContext);
    const displayName = user.data && user.data.displayName;
    const phoneNumber = user.data && user.data.phoneNumber;
    const photoURL = user.data && user.data.photoURL;

    return (
        <div className="user-info">
            <Img
                width={"56px"}
                height={"56px"}
                borderRadius={"50%"}
                url={photoURL}
            ></Img>
            <div className="user-info__data">
                <div className="user-info__name">
                    {displayName ? displayName : "Anonymous"}
                </div>
                <div className="user-info__phone-number">
                    {phoneNumber ? phoneNumber : "Anonymous"}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
