import React from "react"
import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from "./ImagePopup.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="main">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          name=""
          title="Редактировать профиль"
          buttonText="Сохранение"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input type="text" name="name" value="" placeholder="Имя" id="title" className="popup__text 
                        popup__text_type_title" minLength="2" maxLength="40" required />
          <span className="title-error popup__text-error"></span>

          <input type="text" name="about" value="" placeholder="О себе" id="subtitle"
            className="popup__text popup__text_type_subtitle" minLength="2" maxLength="200" required />
          <span className="subtitle-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup_type_image"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input type="text" name="name" value="" placeholder="Название" id="title-image"
            className="popup__text popup__text_type_title" minLength="2" maxLength="30" required />
          <span className="title-image-error popup__text-error"></span>

          <input type="url" name="link" value="" id="link" placeholder="Ссылка на картинку"
            className="popup__text popup__text_type_subtitle" required />
          <span className="link-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup_type_update-avatar"
          title="Обновить аватар"
          buttonText="Сохранение"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input type="url" name="avatar" value="" id="avatar"
            className="popup__text popup__text_type_subtitle" placeholder="Введите ссылку URL" required />
          <span className="avatar-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup_type_confirmation"
          title="Вы уверены?"
          buttonText="Да"
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
