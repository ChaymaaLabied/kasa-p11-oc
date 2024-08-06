import React, { useState } from "react";

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
    <div className="m-auto text-center">
      <div className="slideshow d-flex justify-content-column">
        <button onClick={goToPrevious}>{"<"} </button>
        <img src={pictures[pictureIndex]} alt="" />
        <button onClick={goToNext}>{">"}</button>
      </div>
      {`${pictureIndex + 1}/${pictures.length}`}
    </div>
  );
}
