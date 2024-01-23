import { useState, useEffect } from "react";

import "./style.css";
import '../../FilterPage/filterBox/style.css'

import cross from "../../FilterPage/filterburger/cross.svg";

import CheckboxComponent from "../../../elements/checkboxComponent";
import PriceRange from "../../../elements/priceRange";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";
import FilterList from "../../../elements/filterList";

import img from "../../FilterPage/header/filter.svg";

const BestBurger = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);



  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <div className="bestBurger filterBox">
      <div className={`${isMenuActive ? "active" : ""}`}>
        <div className="filterIcon" onClick={toggleMenu}>
          <img src={img} alt="" />
          <p>Фильтр</p>
        </div>
      </div>
      <div className={`content ${isMenuActive ? "active" : ""}`}>
        <div className="contentBestHeader">
          <h3>Фильтр</h3>
          <div className="filterIcon cross" onClick={toggleMenu}>
            <img src={cross} alt="" />
          </div>
        </div>
        <div className="contentBody">
          <div className="filterBoxComponent">
            <p>Категория</p>
            <CheckboxComponent headers={props.checkboxHeaders} />
          </div>
          
          <div className="filterBoxBtn">
            <PrimaryBtn text="Применить фильтр" />
            <SecondaryBtn text="Сбросить фильтр" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBurger;
