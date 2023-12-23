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
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [lengthArray, setLemgthArray] = useState(0);

  const myArray = [
    {
      id: 2,
      picture: null,
      name: "Игровые сборки",
    },
    {
      id: 3,
      picture: null,
      name: "Ноутбуки",
    },
    {
      id: 4,
      picture: "http://31.129.110.46:8000/media/None/img1.png",
      name: "Клавиатуры",
    },
    {
      id: 5,
      picture: null,
      name: "Мышки",
    },
    {
      id: 6,
      picture: "http://31.129.110.46:8000/media/None/img.png",
      name: "Наушники",
    },
    {
      id: 7,
      picture: null,
      name: "Микрофоны",
    },
    {
      id: 8,
      picture: null,
      name: "Аксессуары",
    },
    {
      id: 9,
      picture: null,
      name: "Комплекты",
    },
    {
      id: 10,
      picture: null,
      name: "Мониторы",
    },
    {
      id: 11,
      picture: null,
      name: "Накопители",
    },
    {
      id: 12,
      picture: null,
      name: "ОЗУ",
    },
    {
      id: 13,
      picture: null,
      name: "UPS",
    },
    {
      id: 14,
      picture: null,
      name: "Блоки питания",
    },
    {
      id: 15,
      picture: null,
      name: "Колонки",
    },
    {
      id: 16,
      picture: null,
      name: "Веб-камеры",
    },
    {
      id: 17,
      picture: null,
      name: "Игровые геймпады",
    },
    {
      id: 18,
      picture: null,
      name: "Кулера",
    },
    {
      id: 19,
      picture: "http://31.129.110.46:8000/media/None/img_1.png",
      name: "Корпуса",
    },
  ];
  const pageClickHandler = (elem) => {
    setPagesClick(elem);
  };
  const setBoxCountHandler = (elem) => {
    setBoxCount(elem);
  };
  useEffect(() => {
    setLemgthArray(myArray.length);
  }, [myArray.length]);

  useEffect(() => {
    setA(pagesCount * boxCount);
    console.log(pagesCount * boxCount, pagesCount * boxCount + boxCount);
    setB(pagesCount * boxCount + boxCount);
    console.log(lengthArray);
  }, [boxCount, pagesCount, a, b, lengthArray]);

  useEffect(() => {
    if (windWidth <= 1300 && 800 < windWidth) {
      pageClickHandler(false);
      setBoxCountHandler(6);
    } else if (windWidth <= 800) {
      pageClickHandler(true);
      setBoxCountHandler(4);
    } else {
      pageClickHandler(false);
      setBoxCountHandler(8);
    }
    setWindWidth(props.windowWidth);
  }, [windWidth, pagesClick, props.windowWidth]);
  const renderBoxes =
    windWidth <= 800
      ? myArray.slice(pagesCount * boxCount, pagesCount * boxCount + boxCount).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={IMG} />;
        })
      : windWidth <= 1300 && windWidth > 800
      ? myArray.slice(a, b).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={IMG} />;
        })
      : myArray.slice(a, b).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={IMG} />;
        });

  const countPageHandler = (elem) => {
    console.log(elem);
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
            fullBar={true}
            maxElems={Math.ceil(myArray.length / boxCount)}
            text="ПЕРиФеРИЯ"
          />
        </div>
      </div>
      <div className="categoryPart">{renderBoxes}</div>
    </div>
  );
};

export default WindowFive;
