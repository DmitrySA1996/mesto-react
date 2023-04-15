import './App.js';

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

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace
}) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" name="avatar" src={AVATAR} alt="Аватар" />
                    <button className="profile__edit-avatar" type="button" onClick={() => {onEditAvatar(true)}}>
                        <img className="profile__pencil" src={pencil} alt="Карандаш" />
                    </button>
                    <div className="profile__edit">
                        <div className="profile__text">
                            <h1 className="profile__title">Жак-Ив-Кусто</h1>
                            <p className="profile__subtitle">Азиатская еда</p>
                        </div>
                        <button type="button" className="profile__edit-text" onClick={() => {onEditProfile(true)}}></button>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={() => {onAddPlace(true)}}></button>
            </section>
            <section className="elements">
                <ul className="elements__cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;