import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Img } from "../common";
import "./userSetting.scss";
import UserSettingInput from "./userSettingInput";

const UserSetting = ({ handleSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userPhoto, setUserPhoto] = useState(
        "https://www.cnet.com/a/img/resize/529e22c1cf902837e010e980a1efe8be4173e3bc/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200"
    );

    const handleChangePhoto = ({ target }) => {
        const [newPhoto] = target.files;
        if (newPhoto) {
            setUserPhoto(URL.createObjectURL(newPhoto));
        }
    };

    return (
        <form className="user-setting">
            <div className="user-setting__photo">
                <Img
                    url={userPhoto}
                    width={"100px"}
                    height={"100px"}
                    borderRadius={"50%"}
                />
                <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleChangePhoto}
                ></input>
                <FontAwesomeIcon icon={faCamera} />
            </div>
            <UserSettingInput
                label="First name:"
                value={firstName}
                setValue={setFirstName}
            />
            <UserSettingInput
                label="Last name:"
                value={lastName}
                setValue={setLastName}
            />
            <div className="user-setting__footer">
                <Button className="user-setting__button">Cancel</Button>
                <Button className="user-setting__button">Save</Button>
            </div>
        </form>
    );
};

export default UserSetting;
