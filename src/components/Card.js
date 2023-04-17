

function Card({card, onCardClick}) {
    
  function handleCardClick() {
    onCardClick(card)
  }

    return (
        <li className="elements__card">
        <button type="button" className="elements__delete"></button>
        <img className="elements__image popup__text_type_title" src={`${card.link}`} alt={`${card.name}`} onClick={handleCardClick}/>
        <article className="elements__texts">
            <h2 className="elements__text popup__text_type_subtitle">{`${card.name}`}</h2>
            <article className="elements__like-group">
                <button type="button" className="elements__like"></button>
                <p className="elements__amount-like">{`${card.likes.length}`}</p>
            </article>
        </article>
        </li> 
    );
}

export default Card;