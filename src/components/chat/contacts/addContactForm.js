import { useState } from "react";
import { ModalInput } from "../../common";
import { Button } from "../../common";
import "./addContactForm.scss";

const AddContactForm = ({ handleClose, addFriend }) => {
    const [value, setValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        addFriend(value);
        handleClose();
    };

    return (
        <form className="add-contact" onSubmit={handleSubmit}>
            <ModalInput
                label="Phone number"
                value={value}
                setValue={setValue}
            />
            <div className="add-contact__footer">
                <Button className="add-contact__button" type="submit">
                    Add contact
                </Button>
            </div>
        </form>
    );
};

export default AddContactForm;
