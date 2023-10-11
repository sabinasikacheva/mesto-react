import React from "react";
//import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {
  //const [userName, setUserName] = React.useState("");
  //const [userDescription, setUserDescription] = React.useState("");
  //const [userAvatar, setUserAvatar] = React.useState("");
  //const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

// React.useEffect(() => {
//   api
//     .getInitialCards()
//     .then((cards) => {
//       //setUserName(data.name);
//       //setUserDescription(data.about);
//       //setUserAvatar(data.avatar);
//       setCards(cards);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
          <button
          className="profile__avatar-changer"
          type="button"
          onClick={onEditAvatar}
          >
          </button>
        </div> 
        <div className="profile__info">
          <div className="profile__item">
            <h1 className="profile__name">
              {currentUser.name}
              </h1>
            <button
              className="profile__edit-button"
              onClick={onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__job">
            {currentUser.about}
            </p>
        </div>
        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>
      <ul className="elements">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
    </main>
  );
}

export default Main;