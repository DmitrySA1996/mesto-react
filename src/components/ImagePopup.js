import './App.js';

function PopupWithImage() {
    
    return (
        <div class="popup popup_type_card">
            <div class="popup__container popup__container_theme_image">
                <button type="button" class="popup__close"></button>
                <img class="popup__image" />
                <p class="popup__sign"></p>
            </div>
        </div>
    )
}

export default PopupWithImage;