import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

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
          <div className="d-flex justify-content-between">
            <h2>{logementData.title}</h2>
            <p>{logementData.host.name}</p>
          </div>
          <p>{logementData.location}</p>
          <div>
            {logementData.tags.map((tag, index) => (
              <span key={index} className="tag mx-2">{tag}</span>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <div className="mx-3 vw-100">
              <Collapse
                title="Description"
                content={logementData.description}
              />
            </div>
            <div className="mx-3 vw-100">
              <Collapse
                title="Equipements"
                content={logementData.equipments.join("\r")}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}