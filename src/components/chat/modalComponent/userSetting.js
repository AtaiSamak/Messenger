import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import updateUser from "../../../firebase/updateUser";
import { Button, Img } from "../../common";
import { ModalInput } from "../../common";
import { MessageContext } from "../../app/app";
import "./userSetting.scss";

const UserSetting = ({ handleCancel }) => {
    const { user } = useContext(MessageContext);
    const [userPhoto, setUserPhoto] = useState(user.data && user.data.photoURL);
    const [displayName, setDisplayName] = useState(
        user.data && user.data.displayName
    );

    const handleChangePhoto = ({ target }) => {
        const [newPhoto] = target.files;
        if (newPhoto) setUserPhoto(URL.createObjectURL(newPhoto));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUserPhoto = e.target.photo.files[0];
        if (newUserPhoto) await updateUser.photoURL(newUserPhoto);
        const update = await updateUser.displayName(displayName);
        if (newUserPhoto || update) {
            user.update();
            handleCancel();
        }
    };

    return (
        <form className="user-setting" onSubmit={handleSubmit}>
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
                    name="photo"
                    onChange={handleChangePhoto}
                />
                <FontAwesomeIcon icon={faCamera} />
            </div>
            <ModalInput
                label="Display name: "
                value={displayName}
                name="firstName"
                setValue={setDisplayName}
                pattern={/^[\w\W]{1,50}$/i}
            />
            <div className="user-setting__footer">
                <Button
                    className="user-setting__button"
                    onClick={handleCancel}
                    type="button"
                >
                    Cancel
                </Button>
                <Button className="user-setting__button" type="submit">
                    Save
                </Button>
            </div>
        </form>
    );
};

export default UserSetting;
