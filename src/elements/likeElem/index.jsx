import { useState, useEffect } from "react";
import like from "./img/likeDefault.svg";
import likeH from "./img/likeHover.svg";
import likeC from "./img/likeClick.svg";
import "./style.css";

const LikeElem = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    props.onClickFromChild(isClicked)
  }, [isClicked])

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="likeBox" onClick={handleClick}>
      <img
        className="Image"
        src={isClicked ? likeH : like}
        alt=""
      />
      <img
        className="hoverImage"
        src={likeC}
        alt=""
      />
    </div>
  );
};

export default LikeElem;
