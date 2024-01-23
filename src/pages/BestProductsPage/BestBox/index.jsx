import { useState, useEffect } from "react";
import "./style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";
import FilterList from "../../../elements/filterList";
import CheckboxComponent from "../../../elements/checkboxComponent";
const FilterForBestBox = (props) => {
  // const categoryList = [
  //   "первая",
  //   "вторая",
  //   "третья",
  //   "четвертая",
  //   "пятая",
  //   "шестая",
  //   "седьмая",
  //   "восьмая",
  // ];


  return (
    <div className="filterBox">
      <div className="filterBoxComponent">
        <h2>Фильтр</h2>
      </div>
      <div className="filterBoxComponent">
        <p>Категория</p>
        <CheckboxComponent headers={props.checkboxHeaders} />
      </div>
      <div className="filterBoxBtn">
        <PrimaryBtn text="Применить фильтр" />
        <SecondaryBtn text="Сбросить фильтр" />
      </div>
    </div>
  );
};

export default FilterForBestBox;
