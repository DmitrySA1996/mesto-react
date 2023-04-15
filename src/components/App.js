import React from "react"
import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  return (
    <body class="main">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
        />
        <PopupWithForm
          name="popup"
          title="Редактировать профиль"
          buttonText="Сохранение"
          isOpen={isEditProfilePopupOpen}
        >
          <input type="text" name="name" value="" placeholder="Имя" id="title" class="popup__text 
                        popup__text_type_title" minlength="2" maxlength="40" required />
          <span class="title-error popup__text-error"></span>

          <input type="text" name="about" value="" placeholder="О себе" id="subtitle"
            class="popup__text popup__text_type_subtitle" minlength="2" maxlength="200" required />
          <span class="subtitle-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup popup_type_image"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
        >
          <input type="text" name="name" value="" placeholder="Название" id="title-image"
            class="popup__text popup__text_type_title" minlength="2" maxlength="30" required />
          <span class="title-image-error popup__text-error"></span>

          <input type="url" name="link" value="" id="link" placeholder="Ссылка на картинку"
            class="popup__text popup__text_type_subtitle" required />
          <span class="link-error popup__text-error"></span>
        </PopupWithForm>
        <ImagePopup />
        <PopupWithForm
          name="popup popup_type_update-avatar"
          title="Обновить аватар"
          buttonText="Сохранение"
          isOpen={isEditAvatarPopupOpen}
        >
          <input type="url" name="avatar" value="" id="avatar"
            class="popup__text popup__text_type_subtitle" placeholder="Введите ссылку URL" required />
          <span class="avatar-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup popup_type_confirmation"
          title="Вы уверены?"
          buttonText="Да"
        />
        <Footer />
        <template className="element-template">
          <li className="elements__card">
            <button type="button" className="elements__delete"></button>
            <img className="elements__image popup__text_type_title" />
            <article className="elements__texts">
              <h2 className="elements__text popup__text_type_subtitle"></h2>
              <article className="elements__like-group">
                <button type="button" className="elements__like"></button>
                <p className="elements__amount-like"></p>
              </article>
            </article>
          </li>
        </template>
      </div>
    </body>
  );
}

export default App;
