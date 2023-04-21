const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__text-error",
  errorClass: "popup__text-error_active",
};

const profileUpdateAvatar = document.querySelector(".profile__edit-avatar");
const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-text");

const formProfile = document.forms.popup__form;
const formImage = document.forms.form;
const formUpdateAvatar = document.forms.editAvatarForm;

/* Профиль */
//константы профиля
const editInputName = document.querySelector(".profile__title");
const editJobInput = document.querySelector(".profile__subtitle");
const avatar = document.querySelector(".profile__image");

const popupConfig = {
  popupEditSelector: ".popup",
  popupAddCardSelector: ".popup_type_image",
  popupImageSelector: ".popup_type_card",
  popupUpdateAvatarSelector: ".popup_type_update-avatar",
  popupDeleteSelector: ".popup_type_confirmation",
};

export {
  profileUpdateAvatar,
  popupConfig,
  profileAddButton,
  profileEditButton,
  formProfile,
  formImage,
  formUpdateAvatar,
  editInputName,
  editJobInput,
  avatar,
  settings,
};
