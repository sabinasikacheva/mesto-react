import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <>
      <Header />
      </>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        name="profile"
        buttonText="Сохранить"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup__input-name"
          name="name"
          className="popup__input popup__input_type_name"
          type="text"
          autoComplete="off"
          defaultValue="Жак-Ив Кусто"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error popup__input-name-error">
        </span>
        <input
          required
          name="about"
          className="popup__input popup__input_type_job"
          type="text"
          autoComplete="off"
          defaultValue="Исследователь океана"
          placeholder="Расскажите о себе"
          minLength="2"
          maxLength="200"
          id="popup__input-job"
        />
        <span className="popup__input-error popup__input-job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          className="popup__input popup__input_type_name"
          type="text"
          autoComplete="off"
          placeholder="Название"
          required
          id="popup__input-place"
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error popup__input-place-error"></span>

        <input
          name="link"
          className="popup__input popup__input_type_image"
          type="url"
          autoComplete="off"
          placeholder="Ссылка на картинку"
          required
          id="popup__input-link"
        />
        <span className="popup__input-error popup__input-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        buttonText="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup__input-avatar"
          name="avatar"
          className="popup__input popup__input_type_link"
          type="url"
          autoComplete="off"
          placeholder="Ссылка на новый аватар"
          required
        />
        <span className="popup__input-error popup__input-avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
