import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import updateUser from "../../firebase/updateUser";
import getDividedDisplayName from "../../helpers/getDividedDisplayName";
import { Button, Img } from "../common";
import { ModalInput } from "../common";
import { MessageContext } from "../context";
import "./userSetting.scss";

const UserSetting = ({ handleCancel }) => {
    const { user } = useContext(MessageContext);
    const photoURL = user.data && user.data.photoURL;
    const dName = getDividedDisplayName(user.data && user.data.displayName);
    const [userPhoto, setUserPhoto] = useState(photoURL);
    const [firstName, setFirstName] = useState(dName[0]);
    const [lastName, setLastName] = useState(dName[1]);

    const handleChangePhoto = ({ target }) => {
        const [newPhoto] = target.files;
        if (newPhoto) {
            setUserPhoto(URL.createObjectURL(newPhoto));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUserPhoto = e.target.photo.files[0];
        if (newUserPhoto) {
            await updateUser.photoURL(newUserPhoto);
        }
        const update = await updateUser.displayName(firstName, lastName);
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
                ></input>
                <FontAwesomeIcon icon={faCamera} />
            </div>
            <ModalInput
                label="First name:"
                value={firstName}
                name="firstName"
                setValue={setFirstName}
                pattern={/^[a-z]+$/i}
            />
            <ModalInput
                label="Last name:"
                value={lastName}
                name="lastName"
                setValue={setLastName}
                pattern={/^[a-z]+$/i}
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
