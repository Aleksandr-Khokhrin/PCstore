import { useState } from "react";

import Specifications from "./specifications";
import ReviewBox from "./reviews";
import Description from "./description";

import arrow from "../../../Header/img/footer/arrow-right.svg";
import "./style.css";

const Aditionally = (props) => {
  const [activeTab, setActiveTab] = useState("specifications");
  const [specificationsVisible, setSpecificationsVisible] = useState(true);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [active, setActive] = useState(false);

  const { windowWidth } = props;
  const specificationsArray = [
    ["Тип наушников", "Полноразмерные"],
    ["Режим работы", "2.4 ГГц, Провод"],
    ["Тип звучания", "DTS®: пространственный звук X®"],
    ["Размер динамиков (мм)", "50 мм"],
    ["Подсветка", "Нет"],
    ["Вес", "272 г"],
  ];
  const descriptionArray = [
    [
      "Удобная и надежная беспроводная свобода",
      "Приобретите беспроводную игровую гарнитуру HyperX Cloud Stinger™ 2 и наслаждайтесь фирменным комфортом в облаке в сочетании со свободой беспроводной связи благодаря надежному беспроводному соединению на частоте 2,4 ГГц. Расширьте возможности игр и аудиоразвлечений с помощью технологии DTS® Headphone:X® Spatial Audio, которая обеспечивает точную локализацию звука и невероятно захватывающий звук. Просто подключите адаптер к свободному USB-порту, и вы готовы к играм, дистанционным занятиям или онлайн-чату с друзьями. Благодаря фирменному комфорту HyperX и долговечному аккумулятору (до 20 часов без подзарядки) эта беспроводная гарнитура создана для того, чтобы приятно проводить время всю ночь. Когда вы будете готовы к перерыву, амбушюры поворачиваются на 90 градусов, так что вы можете удобно расположить гарнитуру на шее. Закрытая чашка и 50-мм излучатели обеспечивают четкость звука. чистый звук, чтобы вы были вовлечены в напряженные командные бои. Он включает в себя несколько удобных для геймеров удобств, таких как регуляторы громкости на чашках наушников, которые дают вам прямой доступ к громкости гарнитуры, и поворотный микрофон для быстрого отключения звука. Он совместим с ПК и поставляется с 2-летней гарантией и бесплатной технической поддержкой.",
    ],
    [
      "Длительный срок службы батареи",
      "До 20 часов автономной работы позволяют выполнять сеансы выравнивания мощности без необходимости заряжать гарнитуру во время боя.",
    ],
    [
      "Фирменный комфорт HyperX",
      "Не покупайте гарнитуру, которая отлично звучит и неудобно носить! Мягкая кожзаменитель и удобная пена с эффектом памяти делают легкие беспроводные наушники Cloud Stinger 2 удобными для ношения независимо от того, играете ли вы, работаете или учитесь.",
    ],
    [
      "Надежная беспроводная связь 2,4 ГГц",
      "Надежное беспроводное соединение на частоте 2,4 ГГц устраняет необходимость в проводах, но по-прежнему обеспечивает невероятно захватывающий звук. Наслаждайтесь свободой игры без проводов!",
    ],
    [
      "Шумоподавляющий микрофон с функцией поворотного отключения",
      "Функции повышения качества жизни HyperX, такие как поворотный микрофон, созданы для того, чтобы улучшить ваши игровые впечатления. Просто переверните микрофон вверх и в сторону, чтобы знать, что звук отключен.",
    ],
    [
      "Легкодоступные элементы управления звуком",
      "Благодаря элементам управления звуком прямо на самой гарнитуре вам не придется перемещаться по лабиринту меню, чтобы отрегулировать громкость.",
    ],
  ];
  const reviewsArray = [
    [4.83, 5],
    [0, 32.1, 20.5, 16.5, 60.5],
    [
      [
        "Sherzod Alimov",
        5,
        "Отличные наушники за свои деньги! Хорошая шумоизоляция. Крутой дизайн.",
      ],
      [
        "Iroda Aminova",
        5,
        "Talabalar uchun moʻljallangan ajoyib noutbuk ekaan narxlari ham ajoyiib sizlarga tavsiyaam chegirmasi bor vaqti zakas qilib qolinglaang yutasizlaar",
      ],
      [
        "Alayskiy Brat",
        4,
        "This product is very nice. I've been looking for this product for two years and now I've found it",
      ],
      [
        "Margarita",
        3,
        "Прекрассный коллектив и конкурсы интересные. Зовите меня еще в следующий раз... только больше пить не предлагайте.",
      ],
      ["Boris Elsin", 4, "Я устал и я ухожу, но наушники берите. Вещъ."],
      [
        "Марио",
        5,
        "Я пытался пройти последний уровень и постоянно спотыкался об черепашку. С этим товаром у меня все пошло как надо",
      ],
    ],
  ];

  const clickCategoryHandler = (tab) => {
    setActiveTab(tab);
    setSpecificationsVisible(tab === "specifications");
    setDescriptionVisible(tab === "description");
    setReviewsVisible(tab === "reviews");
  };
  const clickMobCategoryHandler = (tab) => {
    setActiveTab(tab);
    if (active !== tab) {
      setActive(tab);
      setSpecificationsVisible(tab === "specifications");
      setDescriptionVisible(tab === "description");
      setReviewsVisible(tab === "reviews");
    } else {
      setActive("");
      setSpecificationsVisible(false);
      setDescriptionVisible(false);
      setReviewsVisible(false);
    }
  };

  return (
    <div className="mainContainerForAditionall">
      {windowWidth > 640 && (
        <div className="aditionallyBox">
          <div className="categoryNameBox">
            {["specifications", "description", "reviews"].map((tab) => (
              <div key={tab}>
                <div
                  className={`categoryName ${
                    activeTab === tab ? "categoryNameActive" : ""
                  }`}
                  onClick={() => clickCategoryHandler(tab)}
                >
                  {tab === "specifications" && "Характеристики"}
                  {tab === "description" && "Описание"}
                  {tab === "reviews" && "Отзывы"}
                </div>
              </div>
            ))}
          </div>
          {activeTab === "specifications" && (
            <Specifications info={specificationsArray} />
          )}
          {activeTab === "description" && (
            <Description info={descriptionArray} />
          )}
          {activeTab === "reviews" && <ReviewBox info={reviewsArray} />}
        </div>
      )}
      {windowWidth <= 640 && (
        <div className="aditionallyBox">
          <div className="mobileBox">
            <div
              className="mobileBoxTitle"
              onClick={() => clickMobCategoryHandler("specifications")}
              style={
                specificationsVisible
                  ? { border: "2px solid var(--bgActiveImg)" }
                  : {transition: "border 1.5s"}
              }
            >
              <p
                style={
                  specificationsVisible
                    ? { color: "var(--bgActiveImg)", transition: "color 0.5s" }
                    : {transition: "color 1.5s"}
                }
              >
                Характеристики
              </p>
              <div>
                <img
                  style={
                    specificationsVisible
                      ? { transform: "rotate(90deg)", transition: "transform 1.5s" }
                      : {transition: "transform 1.5s"}
                  }
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            {specificationsVisible && (
              <div className="mobileBoxContent">
                <Specifications info={specificationsArray} />
              </div>
            )}
          </div>
          <div className="mobileBox">
            <div
              className="mobileBoxTitle"
              onClick={() => clickMobCategoryHandler("description")}
              style={
                descriptionVisible
                  ? { border: "2px solid var(--bgActiveImg)" }
                  : {transition: "border 1.5s"}
              }
            >
              <p
                style={
                  descriptionVisible
                    ? { color: "var(--bgActiveImg)", transition: "color 0.5s" }
                    : {transition: "color 1.5s"}
                }
              >
                Описание
              </p>
              <div>
                <img
                  style={
                    descriptionVisible
                      ? { transform: "rotate(90deg)", transition: "transform 1.5s" }
                      : {transition: "transform 1.5s"}
                  }
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            {descriptionVisible && (
              <div className="mobileBoxContent">
                <Description info={descriptionArray} />
              </div>
            )}
          </div>
          <div className="mobileBox">
            <div
              className="mobileBoxTitle"
              onClick={() => clickMobCategoryHandler("reviews")}
              style={
                reviewsVisible
                  ? { border: "2px solid var(--bgActiveImg)" }
                  : {transition: "border 1.5s"}
              }
            >
              <p
                style={
                  reviewsVisible
                    ? { color: "var(--bgActiveImg)", transition: "color 0.5s" }
                    : {transition: "color 1.5s"}
                }
              >
                Отзывы
              </p>
              <div>
                <img
                  style={
                    reviewsVisible
                      ? { transform: "rotate(90deg)", transition: "transform 1.5s" }
                      : {transition: "transform 1.5s"}
                  }
                  
                  src={arrow}
                  alt=""
                />
              </div>
            </div>
            {reviewsVisible && (
              <div className="mobileBoxContent">
                <ReviewBox info={reviewsArray} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aditionally;
