import React from "react";

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        src={card.link}
        className="element__image"
        alt={card.name}
        onClick={handleCardClick}
      />
      <button
        className="element__trash"
        type="button"
      ></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
        <p className="element__like-count">{card.likes.length}</p>
          <button
            className="element__like"
            //name="addLike"
            id="like"
            type="button"
          ></button>
        </div>
      </div>
    </li>
  );
}

export default Card;