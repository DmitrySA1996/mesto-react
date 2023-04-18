function ImagePopup({ card, onClose }) {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__image-container">
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__image-title">{card.name}</figcaption>
        <button className="popup__close" type="button" onClick={onClose} />
      </figure>
    </div>
  )
}

export default ImagePopup