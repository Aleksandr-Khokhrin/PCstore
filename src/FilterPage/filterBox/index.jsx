import { useState, useEffect } from "react";
import "./style.css";
import PrimaryBtn from "../../elements/btns/primary";
import SecondaryBtn from "../../elements/btns/secondary";
import FilterList from "../../elements/filterList";
import CheckboxComponent from "../../elements/checkboxComponent";
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
        <p>Case</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>CPU</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>MB</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>HDD</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>GPU</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>PSU</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxComponent">
        <p>SSD</p>
        <FilterList categories={categoryList} unknown="Выберите со списка" />
      </div>
      <div className="filterBoxBtn">
        <PrimaryBtn text="Применить фильтр" />
        <SecondaryBtn text="Сбросить фильтр" />
      </div>
    </div>
  );
};

export default FilterBox;
