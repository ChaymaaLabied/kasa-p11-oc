import React from "react";
import Collapse from "../components/Collapse";
import "../style/home/banner.scss";
import "../style/about/about.scss"
import aboutBanner from "../assets/home-banner.jpg";

export default function About() {
  const info = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fialibilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <div
        className="banner"
        style={{ "--background-image": `url(${aboutBanner})` }}
      >
        <h2 className="banner__title">Chez vous , partout et ailleurs</h2>
      </div>
      <section className="about-sections">
          {info.map((elt) => (
            <Collapse content={elt.content} title={elt.title} key={elt.title} />
          ))}
      </section>
    </div>
  );
}
