import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import NavigationPage from "../../../elements/navigation";

import "./style.css";

const NewsBlock = (props) => {
  const { windowWidth, newsData } = props;
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    if (windowWidth <= 500) {
      setBoxCount(2);
    } else if (windowWidth <= 800) {
      setBoxCount(4);
    } else if (windowWidth <= 1400) {
      setBoxCount(6);
    } else {
      setBoxCount(8);
    }
  }, [windowWidth]);

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };

  const newsArray =
    windowWidth <= 800
      ? newsData
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            const truncatedText = item.text.slice(0, 150) + "…";
            return (
              <div className="newsSmallBox" key={index}>
                <img src={item.picture} alt="Some description" />
                <div>
                  <Link className="LinkForProduct" to={`/news/${item.id}`}>
                    <h5>{item.title}</h5>
                  </Link>
                  <p>{truncatedText}</p>
                </div>
              </div>
            );
          })
      : newsData
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            const truncatedText = item.text.slice(0, 150) + "…";
            return (
              <div className="newsSmallBox" key={index}>
                <img src={item.picture} alt="Some description" />
                <div>
                  <Link className="LinkForProduct" to={`/news/${item.id}`}>
                    <h5>{item.title}</h5>
                  </Link>
                  <p>{truncatedText}</p>
                </div>
              </div>
            );
          });
  return (
    <div className="newsBlock">
      <div className="newsArray">{newsArray}</div>
      <NavigationPage
        countPage={countPageHandler}
        maxElems={Math.ceil(newsData?.length / boxCount)}
        pages={pagesClick}
        elements={newsData?.length}
        page="filter"
        type="Лучшие предложения"
      />
    </div>
  );
};

export default NewsBlock;
