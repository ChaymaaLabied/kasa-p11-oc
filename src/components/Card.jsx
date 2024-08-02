import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/home/card.scss";

export default function Card({ title, imageUrl, id }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/${id}/details`);
  // };

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
