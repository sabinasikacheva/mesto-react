import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  Promise.all([api.getCurrentUser(), api.getInitialCards()])
    .then(([data, cards]) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
      setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={userAvatar}
            //style={{ backgroundImage: `url(${userAvatar})` }}
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
              {userName}
              </h1>
            <button
              className="profile__edit-button"
              onClick={onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__job">
            {userDescription}
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
            />
          ))}
        </ul>
    </main>
  );
}

export default Main;