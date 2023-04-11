import './App.js';

function PopupWithForm(props) {
    <popupwithform>
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button type="button" className={`popup__close ${props.close}`}></button>
                <form name="popup__form" novalidate className={`popup__form ${props.close}`}>
                    <h2 className="popup__title">{props.title}</h2>

                    <input type="text" name="name" value="" placeholder={`${props.subname}`} id={`${props.id}`} className="popup__text 
              popup__text_type_title" minlength="2" maxlength={props.maxlength} required />
                    <span className={`${props.typeTitleError}-error popup__text-error`}></span>

                    <input type="text" name="about" value="" placeholder={`${props.info}`} id={`${props.subid}`} 
                        className="popup__text popup__text_type_subtitle" minlength="2" maxlength={props.maxLengthInfo} required />
                    <span className={`${props.typeSubtitleError}-error popup__text-error`}></span>

                    <button type="submit" className="popup__submit">{props.Submit}</button>
                </form>
            </div>
        </div>
    </popupwithform>
}

export default PopupWithForm;