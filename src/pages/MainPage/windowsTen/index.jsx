import { useState, useEffect } from "react";

import NavigationPage from "../../../elements/navigation";
import ServiceBox from "../../../elements/servicesBox";

import deliv from "./img/delivery.svg";
import pay from "./img/pay.svg";
import warranty from "./img/warranty.svg";
import FAQ from "./img/FAQ.svg";
import base from "./img/knowledgeBase.svg";
import "./style.css";

const WindowTen = (props) => {
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  const myArray = [
    {
      img: deliv,
      title: "Доставка",
      text: "Быстро, доступно, надежно",
    },
    {
      img: pay,
      title: "Способ оплаты",
      text: "Все об оплате покупок",
    },
    {
      img: warranty,
      title: "Гарантия",
      text: "Информация о гарантии",
    },
    {
      img: FAQ,
      title: "FAQ",
      text: "Часто задаваемые вопросы",
    },
    {
      img: base,
      title: "База знаний",
      text: "Наш опыт ваш опыт",
    },
  ];

  useEffect(() => {
    setWindWidth(props.windowWidth);

    if (windWidth <= 1400 && 800 < windWidth) {
      setBoxCount(3);
      setPagesClick(false);
    } else if (windWidth <= 800) {
      setPagesClick(true);
      setBoxCount(2);
    } else {
      setBoxCount(5);
      setPagesClick(false);
    }
  }, [windWidth, boxCount, pagesClick, pagesCount, props.windowWidth]);
  const renderBoxes =
    windWidth <= 800
      ? myArray
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            return (
              <ServiceBox
                key={index}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            );
          })
      : myArray.slice(0, boxCount).map((item, index) => {
          return (
            <ServiceBox
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          );
        });

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };

  return (
    <div className="windowTen">
      {props.noHeader ? null : <h3 className="titleH">Поддержка</h3>}
      {props.noGPS ? null : (
        <NavigationPage
          countPage={countPageHandler}
          pages={pagesClick}
          elements={myArray.length}
          maxElems={Math.ceil(myArray.length / boxCount)}
        />
      )}
      <div className="windowTenBody">{renderBoxes}</div>
    </div>
  );
};

export default WindowTen;
