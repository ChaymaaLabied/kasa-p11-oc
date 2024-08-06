import React, { useState } from "react";
import "../style/collapse.scss";
import  arrowIconUp from "../assets/arrow_up.png"
import arrowIconDown from "../assets/arrow_down.png"

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowImagePath, setArrowImagePath] = useState(arrowIconUp);

  const toggleCollapse = () => {
    setArrowImagePath(
      isOpen ? arrowIconUp : arrowIconDown
    );
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "is-open" : "is-close"}`}>
      <div className="collapse__title" >
        {title}
        <img className="collapse__arrowIcon" src={arrowImagePath} alt="arrow_icon" onClick={toggleCollapse} />
      </div>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}