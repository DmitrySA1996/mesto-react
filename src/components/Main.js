import './App.js';
import PopupWithForm from './PopupWithForm.js';

import AVATAR from '../images/AVATAR.jpg';
import pencil from '../images/pencil.svg';
/*import {
    profileUpdateAvatar,
    popupConfig,
    profileAddButton,
    profileEditButton,
    formProfile,
    formImage,
    formUpdateAvatar,
    settings,
    editInputName,
    editJobInput,
    editAvatar,
    elementTemplate,
    elementsApi
} from "../utils/constants.js"*/

function Main() {
    
    function handleEditAvatarClick() {        
    const popupAvatar = document.querySelector('.popup_type_update-avatar');
    popupAvatar.classList.add('popup_opened');
    }

    function handleEditProfileClick() {            
    const popupEditProfile = document.querySelector('.popup');
    popupEditProfile.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const popupEditProfile = document.querySelector('.popup_type_image');
        popupEditProfile.classList.add('popup_opened');
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" name="avatar" src={AVATAR} alt="Аватар" />
                    <button className="profile__edit-avatar" type="button" onClick={handleEditAvatarClick}>
                        <img className="profile__pencil" src={pencil} alt="Карандаш" />
                    </button>
                    <div className="profile__edit">
                        <div className="profile__text">
                            <h1 className="profile__title">Жак-Ив-Кусто</h1>
                            <p className="profile__subtitle">Азиатская еда</p>
                        </div>
                        <button type="button" className="profile__edit-text" onClick={handleEditProfileClick}></button>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements">
                <ul className="elements__cards">
                </ul>
            </section>
            <PopupWithForm name="" close="card-add" title="Редактировать профиль" subname="Имя" id="title" 
            maxlength="40" typeTitleError="title" info="О себе" subid="subtitle" maxLengthInfo="200" 
            typeSubtitleError="subtitle"/>             
        </main>
    );
}

export default Main;