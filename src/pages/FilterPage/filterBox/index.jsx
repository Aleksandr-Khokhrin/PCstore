import { useState, useEffect } from "react";
import "./style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";
import FilterList from "../../../elements/filterList";
import CheckboxComponent from "../../../elements/checkboxComponent";
import PriceRange from "../../../elements/priceRange";


const FilterBox = () => {
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
        <FilterList categories={categoryList} unknown="Выберите со списка" />
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

  return (
    <div className="filterBox">
      <div className="filterBoxComponent">
        <h2>Фильтр</h2>
      </div>
      <div className="filterBoxComponent">
        <p>Бренды</p>
        <CheckboxComponent headers={checkboxHeaders} />
      </div>
      <div className="filterBoxComponent">
        <hr />
      </div>
      <div className="filterBoxComponent">
        <p>Цена (Сум)</p>
        <PriceRange start={10} end={1000}/>
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
  );
};

export default FilterBox;
