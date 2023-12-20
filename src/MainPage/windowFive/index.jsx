import { useState, useEffect } from "react";

import CategoryBox from "../../elements/category";
import NavigationPage from "../../elements/navigation/index";
import "./style.css";

import IMG from "../../elements/category/img.svg";

const WindowFive = (props) => {
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  const myArray = [
    {
      title: "Компьютер 1",
      img: IMG,
    },
    {
      title: "Компьютер 2",
      img: IMG,
    },
    {
      title: "Компьютер 3",
      img: IMG,
    },
    {
      title: "Компьютер 4",
      img: IMG,
    },
    {
      title: "Компьютер 5",
      img: IMG,
    },
    {
      title: "Компьютер 6",
      img: IMG,
    },
    {
      title: "Компьютер 7",
      img: IMG,
    },
    {
      title: "Компьютер 8",
      img: IMG,
    },
    {
      title: "Компьютер 9",
      img: IMG,
    },
    {
      title: "Компьютер 10",
      img: IMG,
    },
    {
      title: "Компьютер 11",
      img: IMG,
    },
    {
      title: "Компьютер 12",
      img: IMG,
    },
    {
      title: "Компьютер 13",
      img: IMG,
    },
    {
      title: "Компьютер 14",
      img: IMG,
    },
    {
      title: "Компьютер 15",
      img: IMG,
    },
    {
      title: "Компьютер 16",
      img: IMG,
    },
    {
      title: "Компьютер 17",
      img: IMG,
    },
    {
      title: "Компьютер 18",
      img: IMG,
    },
  ];


  useEffect(() => {
    if (windWidth <= 1300 && 800 < windWidth) {
      setBoxCount(6);
      setPagesClick(false);
    } else if (windWidth <= 800) {
      setPagesClick(true);
      setBoxCount(4);
    } else {
      setBoxCount(8);
      setPagesClick(false);
    }
    setWindWidth(props.windowWidth);
  }, [windWidth, boxCount, pagesClick, props.windowWidth]);

  const renderBoxes =
    windWidth <= 800
      ? myArray
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            return <CategoryBox key={index} title={item.title} img={IMG} />;
          })
      :  myArray.slice(0, boxCount).map((item, index) => {
          return <CategoryBox key={index} title={item.title} img={IMG} />;
        });

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };
  

  return (
    <div className="windowFive">
      <div className="windowFiveHeader">
        <h3 className="titleH">ПЕРиФеРИЯ</h3>
        <div className="NavigationPageForFiveWindow">
          <NavigationPage
            countPage={countPageHandler}
            pages={pagesClick}
            elements={myArray.length}
          />
        </div>
      </div>
      <div className="categoryPart">{renderBoxes}</div>
    </div>
  );
};

export default WindowFive;
