import './App.js';

function PopupWithForm(props) {

    return (
        <div className={`${props.name} ${props.isOpen ? "popup__opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" />
                <form className="popup__form" name={props.name}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__submit" type="submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;