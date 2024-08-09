import React from "react";
import { NavLink } from "react-router-dom";
import error404 from "../assets/404.svg";
import "../style/404.scss";

export default function NotFound() {
  return (
    <div className="notFound">
      <img src={error404} alt="404" />
      <h1>
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </p>
    </div>
  );
}
