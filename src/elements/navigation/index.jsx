import { useState, useEffect } from "react";

import WatchAll from "../watchAll";

import "./style.css";
import arrow from "../../Header/img/footer/arrow-right.svg";
import arrowleft from "../../Header/img/footer/arrow-left.svg";

const NavigationPage = (props) => {
  const [count, setCount] = useState(0);
  const [allPages, setAllPages] = useState(null);
  const [elem, setElem] = useState(1);
  const [showEllipsis, setShowEllipsis] = useState(true);
  const [maxElems, setMaxElems] = useState(4)

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
    if (props.windWidth <= 400) {
      setElem(props.elements * 2);
    } else {
      setElem(props.elements);
    }
    if (props.maxElems) {
      setMaxElems()
    }
    setAllPages(Math.ceil(elem / maxElems));
    const newCount =
      count < 0
        ? 0
        : count > Math.floor(elem / maxElems)
        ? Math.floor(elem / 4)
        : count;
    props.countPage(newCount);
    setCount(newCount);
  }, [count, elem]);

  const handlePrev = () => {
    setCount(count - 1);
  };
  const handleNext = () => {
    setCount(count + 1);
  };
  function setEllipsisFALSE() {
    setShowEllipsis(false);
  }

  const pagesArray = Array.from({ length: allPages }).map((i, index) => {
    return count === index ? (
      <p key={index} className="pages figure">
        {index + 1}
      </p>
    ) : allPages <= 4 ? (
      <p key={index} className="pages">
        {index + 1}
      </p>
    ) : allPages >= 4 &&
      ((count + 1 === index &&
        count + 1 !== 2 &&
        !(count > 1 && count < allPages - 3)) ||
        (count - 1 === index &&
          count !== allPages - 2 &&
          count !== allPages - 3) ||
        index + 1 === allPages ||
        (index === 0 && count === allPages - 2)) ? (
      <p key={index} className="pages">
        {index + 1}
      </p>
    ) : allPages >= 4 &&
      (count + 2 === index || (count - 2 === index && count > allPages - 4)) ? (
      <p key={index} className="pages">
        ...
      </p>
    ) : allPages >= 4 && count + 1 === allPages && index === 0 ? (
      <p key={index} className="pages">
        {index + 1}
      </p>
    ) : null;
  });

  return (
    <div>
      {props.pages ? (
        <div className="navAndWatch">
          <div className="navigationPage">
            <div className="navigationArrow left" onClick={handlePrev}>
              <img src={arrowleft} alt="" />
            </div>
            {props.pages ? <div className="pagesBox">{pagesArray}</div> : null}

            <div className="navigationArrow right" onClick={handleNext}>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="navigationPage">
            <WatchAll />
          </div>
        </div>
      ) : (
        !props.smallArray ?
        <div className="navigationPage">
          <WatchAll />
        </div> : null
      )}
    </div>
  );
};

export default NavigationPage;