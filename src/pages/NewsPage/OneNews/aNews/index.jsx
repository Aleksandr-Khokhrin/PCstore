import { useState } from "react";

import "./style.css";

const ANews = (props) => {
  const [gpsImg, setGpsImg] = useState(true);
  const { windowWidth, data } = props;

  const renderBox = data?.articles?.map((item, i) => {
    return (
      <div
        className="newsArticle"
        style={
          windowWidth > 700
            ? i % 2 === 1
              ? { flexDirection: "row-reverse" }
              : { flexDirection: "row" }
            : { flexDirection: "column" }
        }
        key={i}
      >
        <div className="newsArticleText">
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
        {item.picture ? (
          <div className="newsArticleImg">
            <img src={item.picture} alt="" />
          </div>
        ) : null}
      </div>
    );
  });
  return (
    <div className="ANewsBox">
      <div className="ANewsBoxHeader">
        {data.title ? <h3>{data.title}</h3> : <h3>...</h3>}
      </div>
      <div className="ANewsBody">
        <div className="ANewsImg">
          <img src={data.picture} alt="" />
        </div>
        <div className="ANewsContent">{renderBox}</div>
      </div>
    </div>
  );
};

export default ANews;
