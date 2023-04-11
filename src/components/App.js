import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
      <body class="main">
      <div className="page">
        <Header/>
       <Main/>
        <Footer/>
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
