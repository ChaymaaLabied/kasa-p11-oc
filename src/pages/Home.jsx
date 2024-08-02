import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../style/home/banner.scss";
import "../style/home/home.scss"
import homeBanner from "../assets/home-banner.jpg";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="content">
      <div
        className="banner"
        style={{ "--background-image": `url(${homeBanner})` }}
      >
        <h2 className="banner__title">Chez vous , partout et ailleurs</h2>
      </div>
      <section className="logements">
        <ul className="gallery">
          {logements.map((logement) => (
            <li className="card" key={logement.id}>
              <Card
                imageUrl={logement.cover}
                title={logement.title}
                id={logement.id}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
