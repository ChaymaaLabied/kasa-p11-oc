import React, { useState } from "react";
import "../style/slideshow.scss";
import prevBtn from "../assets/arrow-left.png";
import nextBtn from "../assets/arrow-right.png";

export default function Slideshow({ pictures }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  const goToNext = () => {
    setPictureIndex(
      pictures.length === pictureIndex + 1 ? 0 : pictureIndex + 1
    );
  };

  const goToPrevious = () => {
    setPictureIndex(
      pictureIndex - 1 < 0 ? pictures.length - 1 : pictureIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img src={pictures[pictureIndex]} alt="" className="slideshow__image" />
      {pictures.length > 1 && (
        <div className="slideshow__nav">
          <button
            onClick={goToPrevious}
            className="slideshow__nav-prev"
            aria-label="previous"
          >
            <img src={prevBtn} alt="previous_btn" />
          </button>
          <button
            onClick={goToNext}
            className="slideshow__nav-next"
            aria-label="next"
          >
            <img src={nextBtn} alt="next_btn" />
          </button>
          <div className="slideshow__pagination">{`${pictureIndex + 1}/${
            pictures.length
          }`}</div>
        </div>
      )}
    </div>
  );
}
