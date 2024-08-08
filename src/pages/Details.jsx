import React from "react";
import { useLoaderData } from "react-router-dom";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Rating from "../components/StarRating";
import "../style/details.scss";
import "../style/person.scss";

export default function Details() {
  const { logement } = useLoaderData();


  // useEffect(() => {
  //   fetch("../data/logements.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const logement = data.find((elt) => elt.id === id);
  //       if (!logement) {
  //         throw new Error("Property not found");
  //       }
  //       setLogementData(logement);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, [id]);

  return (
    <div className="details">
      {logement && (
        <>
          <Slideshow pictures={logement.pictures} />
          <section className="details__summary">
            <hgroup className="details__heading">
              <h1 className="details__title">{logement.title}</h1>
              <p className="details_location">{logement.location}</p>
              <ul className=" tagList details__tags">
                {logement.tags.map((tag, index) => (
                  <li key={index}>
                    <span className="tag">{tag}</span>
                  </li>
                ))}
              </ul>
            </hgroup>
            <aside className="details__infos">
            <Rating score={logement.rating} activeColor="#ff6060" />
              <figure className="person">
                {" "}
                <img
                  className="person__avatar"
                  src={logement.host.picture}
                  alt="person's pic"
                />
                <figcaption className="person__name">
                  {logement.host.name}
                </figcaption>
              </figure>
            </aside>
          </section>

          <div className="details__collapse">
            <Collapse title="Description" content={logement.description} />
            <Collapse
              title="Equipements"
              content={logement.equipments.join("\r")}
            />
          </div>
        </>
      )}
    </div>
  );
}
