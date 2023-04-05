import './index.css';
import logoMestoHeader from './images/logo__mesto_header.svg';
import AVATAR from './images/AVATAR.jpg';
import pencil from './images/pencil.svg';

function App() {
  return (
    <div className="App">
      <body class="main">
      <div className="page">
        <header className="header">
          <div className="header__main">
            <img className="header__logo" src={logoMestoHeader} alt="Место" />
          </div>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img className="profile__image" name="avatar" src={AVATAR} alt="Аватар" />
              <button className="profile__edit-avatar" type="button">
                <img className="profile__pencil" src={pencil} alt="Карандаш" />
              </button>
              <div className="profile__edit">
                <div className="profile__text">
                  <h1 className="profile__title">Жак-Ив-Кусто</h1>
                  <p className="profile__subtitle">Азиатская еда</p>
                </div>
                <button type="button" className="profile__edit-text"></button>
              </div>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>
          <section className="elements">
            <ul className="elements__cards">
            </ul>
          </section>
          <div class="popup">
            <div className="popup__container">
              <button type="button" className="popup__close popup__close_type_card-add"></button>
              <form name="popup__form" novalidate className="popup__form popup__form_type_card-add">
              <h2 className="popup__title">Редактировать профиль</h2>

              <input type="text" name="name" value="" placeholder="Имя" id="title" className="popup__text 
                        popup__text_type_title" minlength="2" maxlength="40" required />
              <span className="title-error popup__text-error"></span>

              <input type="text" name="about" value="" placeholder="О себе" id="subtitle"
                className="popup__text popup__text_type_subtitle" minlength="2" maxlength="200" required />
              <span className="subtitle-error popup__text-error"></span>

              <button type="submit" className="popup__submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_image">
            <div className="popup__container">
              <button type="button" className="popup__close"></button>
              <form name="form" novalidate className="popup__form">
              <h2 className="popup__title">Новое место</h2>

              <input type="text" name="name" value="" placeholder="Название" id="title-image"
                className="popup__text popup__text_type_title" minlength="2" maxlength="30" required />
              <span className="title-image-error popup__text-error"></span>

              <input type="url" name="link" value="" id="link" placeholder="Ссылка на картинку"
                className="popup__text popup__text_type_subtitle" required />
              <span className="link-error popup__text-error"></span>

              <button type="submit" className="popup__submit">Создать</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_card">
            <div className="popup__container popup__container_theme_image">
              <button type="button" className="popup__close"></button>
              <img className="popup__image" />
              <p className="popup__sign"></p>
            </div>
          </div>
          <div className="popup popup_type_update-avatar">
            <div className="popup__container">
              <button type="button" className="popup__close"></button>
              <form className="popup__form" name="editAvatarForm" id="editAvatarForm" novalidate>
                <h2 className="popup__title">Обновить аватар</h2>

                <input type="url" name="avatar" value="" id="avatar"
                  className="popup__text popup__text_type_subtitle" placeholder="Введите ссылку URL" required />
                <span className="avatar-error popup__text-error"></span>

                <button type="submit" className="popup__submit">Сохранить</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_confirmation">
            <div className="popup__container">
              <button type="button" className="popup__close"></button>
              <form className="popup__form">
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__submit">
                  Да
                </button>
              </form>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
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
    </div>
  );
}

export default App;
