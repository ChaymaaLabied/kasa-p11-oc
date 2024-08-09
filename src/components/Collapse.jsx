import React, { useState } from "react";
import "../style/collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      <div className="collapse__title" onClick={toggleCollapse}>
        {title}
      </div>
      <div className="collapse__content">
        <blockquote>{content}</blockquote>
      </div>
    </div>
  );
}
