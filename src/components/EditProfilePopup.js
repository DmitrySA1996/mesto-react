import React from "react";
import PopupWithForm from "./PopupWithForm.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose }) {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const currentUser = CurrentUserContext;

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <PopupWithForm
            name=""
            isOpen={isOpen}
            onClose={onClose}
            title="Редактировать профиль"
            buttonText="Сохранение"
        >
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Имя"
                id="title"
                className="popup__text popup__text_type_title"
                minLength="2"
                maxLength="40"
                required
                onChange={handleNameChange}
            />
            <span className="title-error popup__text-error"></span>
            <input
                type="text"
                name="about"
                value={description}
                placeholder="О себе"
                id="subtitle"
                className="popup__text popup__text_type_subtitle"
                minLength="2"
                maxLength="200"
                required
                onChange={handleDescriptionChange}
            />
            <span className="subtitle-error popup__text-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;