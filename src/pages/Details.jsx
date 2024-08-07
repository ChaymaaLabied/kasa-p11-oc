import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../style/details.scss";
import Rating from "../components/StarRating";
import "../style/person.scss";

export default function Details() {
  let { id } = useParams();

  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    fetch("../data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const logement = data.find((elt) => elt.id === id);
        if (!logement) {
          throw new Error("Property not found");
        }
        setLogementData(logement);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="details">
      {logementData && (
        <>
          <Slideshow pictures={logementData.pictures} />
          <section className="details__summary">
            <hgroup className="details__heading">
              <h1 className="details__title">{logementData.title}</h1>
              <p className="details_location">{logementData.location}</p>
              <ul className=" tagList details__tags">
                {logementData.tags.map((tag, index) => (
                  <li key={index}>
                    <span className="tag">{tag}</span>
                  </li>
                ))}
              </ul>
            </hgroup>
            <aside className="details__infos">
            <Rating score={logementData.rating} activeColor="#ff6060" />
              <figure className="person">
                {" "}
                <img
                  className="person__avatar"
                  src={logementData.host.picture}
                  alt="person's pic"
                />
                <figcaption className="person__name">
                  {logementData.host.name}
                </figcaption>
              </figure>
            </aside>
          </section>

          <div className="details__collapse">
            <Collapse title="Description" content={logementData.description} />
            <Collapse
              title="Equipements"
              content={logementData.equipments.join("\r")}
            />
          </div>
        </>
      )}
    </div>
  );
}
