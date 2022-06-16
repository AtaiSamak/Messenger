import React, { useContext } from "react";
import { MessageContext } from "../../app/app";
import { Img } from "../../common";
import defaultPhoto from "../../../assets/userDefaultPhoto.png";
import "./viewProfile.scss";

const ViewProfile = () => {
    const { responder } = useContext(MessageContext);
    const photoURL = responder && responder.photoURL;

    return (
        <div className="view-profile">
            <Img
                url={photoURL || defaultPhoto}
                width={"100px"}
                height={"100px"}
                borderRadius={"50%"}
                style={{ marginBottom: "20px" }}
            />
            <div className="view-profile__section">
                <span>Phone number: </span>
                <br />
                {responder.phoneNumber}
            </div>
            <div className="view-profile__section">
                <span>Display Name: </span>
                <br />
                {responder.displayName}
            </div>
        </div>
    );
};

export default ViewProfile;
