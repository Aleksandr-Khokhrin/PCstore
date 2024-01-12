import { useState, useEffect } from "react";

import "./style.css";
import '../filterBox/style.css'

import cross from "./cross.svg";
import CheckboxComponent from "../../../elements/checkboxComponent";
import PriceRange from "../../../elements/priceRange";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";
import FilterList from "../../../elements/filterList";

import img from "../header/filter.svg";

const FilterBurger = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const categoryList = [
    "первая",
    "вторая",
    "третья",
    "четвертая",
    "пятая",
    "шестая",
    "седьмая",
    "восьмая",
  ];
  const category = ["Case", "CPU", "MB", "HDD", "GPU", "PSU", "SSD"];
  const filterElems = category.map((item, index) => {
    return (
      <div key={index} className="filterBoxComponent">
        <p>{item}</p>
        <FilterList burger={true} categories={categoryList} unknown="Выберите со списка" />
      </div>
    );
  });

  const checkboxHeaders = [
    {
      title: "Phyton",
      sum: 12,
    },
    {
      title: "Java Script",
      sum: 52,
    },
    {
      title: "C#",
      sum: 291,
    },
  ];

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <div className="filterSmallLeft filterBox">
      <div className={`${isMenuActive ? "active" : ""}`}>
        <div className="filterIcon" onClick={toggleMenu}>
          <img src={img} alt="" />
          <p>Фильтр</p>
        </div>
      </div>
      <div className={`content ${isMenuActive ? "active" : ""}`}>
        <div className="contentHeader">
          <h3>Фильтр</h3>
          <div className="filterIcon cross" onClick={toggleMenu}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className="contentBody">
          <div className="filterBoxComponent">
            <p>Бренды</p>
            <CheckboxComponent headers={checkboxHeaders} />
          </div>
          <div className="filterBoxComponent">
            <hr />
          </div>
          <div className="filterBoxComponent">
            <p>Цена (Сум)</p>
            <PriceRange start={10} end={1000} />
          </div>
          <div className="filterBoxComponent">
            <hr />
          </div>
          {filterElems}
          <div className="filterBoxBtn">
            <PrimaryBtn text="Применить фильтр" />
            <SecondaryBtn text="Сбросить фильтр" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBurger;
