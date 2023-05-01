import React from "react";
import "../pages/index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/API";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getRealUserInfo(), api.getInitialCards()])
      .then(([userProfile, cards]) => {
        setCurrentUser(userProfile);
        setCards(cards);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id)

    if (isLiked) {
      api
        .removeLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((error) => console.log(`Ошибка: ${error}`))
    } else {
      api
        .addLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((error) => console.log(`Ошибка: ${error}`))
    }
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id))
        closeAllPopups()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
  }

  return (
    <div className="main">
      <div className="page">
        <Header />
        <CurrentUserContext.Provider value={currentUser}>
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            cards={cards}
            currentUser={currentUser}
            onCardDelete={handleCardDelete}
          />
        </CurrentUserContext.Provider>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm
          name="popup_type_image"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            value=""
            placeholder="Название"
            id="title-image"
            className="popup__text popup__text_type_title"
            minLength="2"
            maxLength="30"
            required
            readOnly={true}
          />
          <span className="title-image-error popup__text-error"></span>

          <input
            type="url"
            name="link"
            value=""
            id="link"
            placeholder="Ссылка на картинку"
            className="popup__text popup__text_type_subtitle"
            required
            readOnly={true}
          />
          <span className="link-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup_type_update-avatar"
          title="Обновить аватар"
          buttonText="Сохранение"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="avatar"
            value=""
            id="avatar"
            className="popup__text popup__text_type_subtitle"
            placeholder="Введите ссылку URL"
            required
            readOnly={true}
          />
          <span className="avatar-error popup__text-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="popup_type_confirmation"
          title="Вы уверены?"
          buttonText="Да"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
