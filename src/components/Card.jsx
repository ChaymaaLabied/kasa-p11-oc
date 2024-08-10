import React from "react";
import { Link } from "react-router-dom";
import "../style/home/card.scss";

export default function Card({ title, imageUrl, id }) {

  return (
    <Link to={`/${id}/details`} className="card__link">
      <img
        className="card__cover"
        src={imageUrl}
        alt={`Vue de ${title}`}
        loading="lazy"
      />
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}
