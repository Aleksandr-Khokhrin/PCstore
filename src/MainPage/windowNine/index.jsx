import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBannersClients } from "../../redux/slices/banners";

import WatchAll from "../../elements/watchAll";
import CommentBox from "../../elements/commentsBoxes";
import NavigationPage from "../../elements/navigation/index";

import "./style.css";
import img from "./img.jpg";
const WindowNine = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.banners.clients?.items);
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  // console.log(data);

  const myArray = [
    {
      picture: img,
      name: "FEZOT",
      title: "«2 компьютера в одном это удобно.»",
    },
    {
      picture: img,
      name: "az1KK",
      title: "«… к киберпанку готов максимально»",
    },
    {
      picture: img,
      name: "KH GAMING",
      title: "«Чтоб у всех такие компьютеры были.»",
    },
    {
      picture: img,
      name: "Robocop",
      title: "«2 компьютера в одном это удобно.»",
    },
    {
      picture: img,
      name: "DED",
      title: "«… к киберпанку готов максимально»",
    },
    {
      picture: img,
      name: "Praded",
      title: "«можно еще сгущёнки»",
    },
    {
      picture: img,
      name: "PraPraded",
      title: "«работай и не кашляй»",
    },
    {
      picture: img,
      name: "Ego sin",
      title: "«можно мне тот красивый моник?»",
    },
  ];

  useEffect(() => {
    dispatch(fetchBannersClients());

    if (windWidth <= 1300 && 1000 < windWidth) {
      setBoxCount(5);
      setPagesClick(false);
    } else if (windWidth <= 1000 && 800 < windWidth) {
      setBoxCount(3);
      setPagesClick(false);
    } else if (windWidth <= 800) {
      setPagesClick(true);
      setBoxCount(2);
    } else {
      setBoxCount(8);
      setPagesClick(false);
    }
    setWindWidth(props.windowWidth);
  }, [windWidth, pagesCount, boxCount, pagesClick, props.windowWidth]);

  const renderBoxes =
    windWidth <= 800
      ? data
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount - 1)
          .map((item, index) => {
            return (
              <CommentBox
                key={index}
                img={item.picture}
                title={item.name}
                text={item.title}
                height="calc(4.6vw + 239px)"
                flexBasis="100%"
              />
            );
          })
      : windWidth >= 1300
      ? data.slice(0, 3).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="33.3%"
            />
          );
        })
      : windWidth >= 1000
      ? data.slice(0, 2).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="50%"
            />
          );
        })
      : data.slice(0, 1).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="100%"
            />
          );
        });
  const renderBoxesTwo =
    windWidth >= 1300
      ? data.slice(4, boxCount).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="25%"
            />
          );
        })
      : windWidth >= 1000
      ? data.slice(2, boxCount).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="33.3%"
            />
          );
        })
      : windWidth <= 1000 && windWidth >= 800
      ? data.slice(1, boxCount).map((item, index) => {
          return (
            <CommentBox
              key={index}
              img={item.picture}
              title={item.name}
              text={item.title}
              height="calc(4.6vw + 239px)"
              flexBasis="50%"
            />
          );
        })
      : windWidth <= 800
      ? data
          .slice(pagesCount * boxCount + 1, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            return (
              <CommentBox
                key={index}
                img={item.picture}
                title={item.name}
                text={item.title}
                height="calc(4.6vw + 239px)"
                flexBasis="100%"
              />
            );
          })
      : null;

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };
  return (
    <div className="windowNine">
      <div className="windowNineHeader">
        <h3 className="titleH">
          Клиенты UPG
          <span className="titleH" style={{ color: "var(--bgSearchImg)" }}>
            rade
          </span>
        </h3>
      </div>
      <NavigationPage
        countPage={countPageHandler}
        pages={pagesClick}
        elements={data.length}
        maxElems={Math.ceil(data.length / boxCount)}
      />
      <div className="windowNineContentBody">
        <div className="windowNineContent">{renderBoxes}</div>
        <div className="windowNineContent">{renderBoxesTwo}</div>
      </div>
    </div>
  );
};

export default WindowNine;
