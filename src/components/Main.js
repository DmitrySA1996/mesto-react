import React from 'react';
import api from '../utils/API';
import Card from '../components/Card.js';
import './App.js';

import pencil from '../images/pencil.svg';

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
}) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getRealUserInfo()])
            .then(([userProfile]) => {
                setUserName(userProfile.name)
                setUserAvatar(userProfile.avatar)
                setUserDescription(userProfile.about)
            })
            .catch((error) => console.log(`Ошибка: ${error}`))
        api
            .getInitialCards()
            .then((data) => {
                setCards(
                    data.map((card) => ({
                        _id: card._id,
                        name: card.name,
                        link: card.link,
                        likes: card.likes,
                        owner: card.owner,
                    }))
                )
            })
            .catch((error) => console.log(`Ошибка: ${error}`))
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__image" name="avatar" src={`${userAvatar}`} alt="Аватар" />
                    <button className="profile__edit-avatar" type="button" onClick={() => { onEditAvatar(true) }}>
                        <img className="profile__pencil" src={pencil} alt="Карандаш" />
                    </button>
                    <div className="profile__edit">
                        <div className="profile__text">
                            <h1 className="profile__title">{`${userName}`}</h1>
                            <p className="profile__subtitle">{`${userDescription}`}</p>
                        </div>
                        <button type="button" className="profile__edit-text" onClick={() => { onEditProfile(true) }}></button>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={() => { onAddPlace(true) }}></button>
            </section>
            <section className="elements">
                <ul className="elements__cards">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;