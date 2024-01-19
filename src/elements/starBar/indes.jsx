import React, { useState, useEffect } from "react";
import "./style.css";

import starDefault from "./img/starDefault.svg";
import starHover from "./img/starActive.svg";
import starActive from "./img/starHover.svg";

const StarBar = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1); // Устанавливаем начальное значение activeIndex в 0
  const [active, setActive] = useState(false); // Устанавливаем начальное значение activeIndex в 0
  const [sumActive, setSumActive] = useState(0); // Устанавливаем начальное значение activeIndex в 0
  const [first, setFirst] = useState(true); // Устанавливаем начальное значение activeIndex в 0

  useEffect(() => {
    setActive(props.active)
    setSumActive(props.sum)
    setActiveIndex(-1 + sumActive) 
  }, [active, props.active, sumActive, props.sum])
  const handleStarHover = (index) => {
    if (active) {
      setHoveredIndex(index);
      setFirst(false)
    }
  };

  const handleStarLeave = () => {
    if (active) {
      setHoveredIndex(null);
    }
  };

  const handleStarClick = (index) => {
    if (active) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="starBar" onMouseLeave={handleStarLeave}>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={
            first && index < sumActive?
            starHover
            : active 
              ? hoveredIndex !== null && index <= hoveredIndex
                ? starActive
                : index <= activeIndex
                ? starHover
                : starDefault
              : starDefault
          }
          alt=""
          onMouseEnter={() => handleStarHover(index)}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default StarBar;
