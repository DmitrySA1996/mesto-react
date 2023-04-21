import React from "react";
import api from "../utils/API";
import Card from "../components/Card.js";

import pencil from "../images/pencil.svg";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getRealUserInfo(), api.getInitialCards()])
      .then(([userProfile, cards]) => {
        setUserName(userProfile.name);
        setUserAvatar(userProfile.avatar);
        setUserDescription(userProfile.about);
        setCards(cards);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            name="avatar"
            src={`${userAvatar}`}
            alt="Аватар"
          />
          <button
            className="profile__edit-avatar"
            type="button"
            onClick={onEditAvatar}
          >
            <img className="profile__pencil" src={pencil} alt="Карандаш" />
          </button>
          <div className="profile__edit">
            <div className="profile__text">
              <h1 className="profile__title">{`${userName}`}</h1>
              <p className="profile__subtitle">{`${userDescription}`}</p>
            </div>
            <button
              type="button"
              className="profile__edit-text"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
