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
  const [maxElems, setMaxElems] = useState(4);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
    if (props.windWidth <= 800) {
      if (props.windWidth <= 400) {
        setElem(props.elements * 2);
      } else {
        setElem(props.elements);
      }
      if (props.maxElem === 2) {
        setAllPages(Math.ceil(elem / maxElems));
        console.log("I'm here", count);
        console.log(props.maxElem === 2);
        const newCount =
          count < 0
            ? 0
            : count > Math.floor(elem / maxElems)
            ? Math.floor(elem / maxElems)
            : count;
        // console.log(newCount);
        props.countPage(newCount);
        setCount(newCount);
      } else {
        setAllPages(Math.ceil(elem / maxElems));
        const newCount =
          count < 0
            ? 0
            : count > Math.ceil(elem / maxElems)
            ? Math.ceil(elem / maxElems)
            : count;
        // console.log(newCount);
        props.countPage(newCount);
        setCount(newCount);
      }
    } else {
      setAllPages(maxElems);
      const newCount = count < 0 ? 0 : count > maxElems ? maxElems : count;
      props.countPage(newCount);
      setCount(newCount);
    }
    if (props.maxElems) {
      setMaxElems(props.maxElems);
    }
  }, [count, elem, maxElems]);

  const handlePrev = () => {
    setCount(count - 1);
  };
  const handleNext = () => {
    if (count + 1 < allPages) {
      setCount(count + 1);
    }
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
      (count + 2 === index || (count - 2 === index && (count > allPages - 4 && (count < 3 || count > allPages - 4)))) ? (
      <p key={index} className="pages">
        ...
      </p>
    ) : allPages >= 4 && count + 1 === allPages && index === 0 ? (
      <p key={index} className="pages">
        {index + 1}
      </p>
    ) : null;
  });

  return props.page === "filter" ? (
    <div className="navigationPage"
    style={{justifyContent: 'space-between'}}>
      <div className="navigationArrow left" onClick={handlePrev}>
        <img src={arrowleft} alt="" />
      </div>
      <div className="pagesBox">{pagesArray}</div>

      <div className="navigationArrow right" onClick={handleNext}>
        <img src={arrow} alt="" />
      </div>
    </div>
  ) : (
    <div>
      {props.pages || props.fullBar ? (
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
          {!props.fullBar ? (
            <div className="navigationPage linkNav">
              <WatchAll page={props.page} type={props.type} />
            </div>
          ) : null}
        </div>
      ) : !props.smallArray ? (
        <div
          className="navigationPage"
          style={
            props?.flexStart
              ? { justifyContent: "flex-start" }
              : { justifyContent: "flex-end" }
          }
        >
          <WatchAll page={props.page} type={props.type} />
        </div>
      ) : null}
    </div>
  );
};

export default NavigationPage;
