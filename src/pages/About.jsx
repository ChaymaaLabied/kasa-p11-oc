import React from "react";
import Collapse from "../components/Collapse";

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
  ];
  return (
    <div>
      <div className="about-banner" />
      <div className="collapse-container mx-5 my-4">
        {info.map((elt) => (
          <Collapse content={elt.content} title={elt.title} key={elt.title} />
        ))}
      </div>
    </div>
  );
}
