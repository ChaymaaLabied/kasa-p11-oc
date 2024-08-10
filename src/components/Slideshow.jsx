import React, { useState } from "react";
import "../style/details/slideshow.scss";
import Chevron from "../components/Chevron";

export default function Slideshow({ pictures }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  const goToNext = () => {
    setPictureIndex(pictures.length === pictureIndex + 1 ? 0 : pictureIndex + 1);
  };

  const goToPrevious = () => {
    setPictureIndex(pictureIndex - 1 < 0 ? pictures.length - 1 : pictureIndex - 1);
  };

  return (
    <div className="slideshow">
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt=""
          className={`slideshow__image ${index === pictureIndex ? 'visible' : ''}`}
        />
      ))}
      {pictures.length > 1 && (
        <div className="slideshow__nav">
          <button
            onClick={goToPrevious}
            className="slideshow__nav-prev"
            aria-label="previous"
          >
            <Chevron direction="left" />
          </button>
          <button
            onClick={goToNext}
            className="slideshow__nav-next"
            aria-label="next"
          >
            <Chevron direction="right" />
          </button>
          <div className="slideshow__pagination">
            {`${pictureIndex + 1}/${pictures.length}`}
          </div>
        </div>
      )}
    </div>
  );
}
