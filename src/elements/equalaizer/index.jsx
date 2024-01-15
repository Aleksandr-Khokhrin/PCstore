import { useState, useEffect } from "react";

import LikeElem from "../likeElem";

import equalizer from "../assembly/img/equalizer.svg";
import share from "../assembly/img/share.svg";

import "./style.css";

const Equalizer = (props) => {
  const [like, setLike] = useState(false);
  const onClickFromChildHandler = (data) => {
    setLike(data);
  };
  return (
    <div className="likeElem" style={props.row ? {flexDirection: 'row'} : null}>
      <LikeElem onClickFromChild={onClickFromChildHandler} />
      <div className="equalaizer">
        <img src={equalizer} alt="" />
      </div>
      <div className="equalaizer share">
        <img src={share} alt="" />
      </div>
    </div>
  );
};

export default Equalizer;
