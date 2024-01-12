import { useState, useEffect } from "react";
import "./style.css";
import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";
import FilterList from "../../../elements/filterList";
import CheckboxComponent from "../../../elements/checkboxComponent";
const FilterForBestBox = () => {
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
      title: "Наушники",
      sum: 12,
    },
    {
      title: "Компьютеры",
      sum: 52,
    },
    {
      title: "Ручная собака",
      sum: 291,
    },
    {
      title: "Звездолёт",
      sum: 12,
    },
    {
      title: "Реки",
      sum: 52,
    },
    {
      title: "Сабзавотлар",
      sum: 291,
    },
    {
      title: "Наручники",
      sum: 12,
    },
    {
      title: "Блейзеры",
      sum: 52,
    },
    {
      title: "Никаноры",
      sum: 291,
    },
    {
      title: "Кукрыниксы",
      sum: 12,
    },
    {
      title: "Пороги автомобилей",
      sum: 52,
    },
    {
      title: "Мешки с пылью",
      sum: 291,
    },
    {
      title: "Имена",
      sum: 12,
    },
    {
      title: "Рога навозных жуков",
      sum: 52,
    },
    {
      title: "Ябрь",
      sum: 291,
    },
  ];

  return (
    <div className="filterBox">
      <div className="filterBoxComponent">
        <h2>Фильтр</h2>
      </div>
      <div className="filterBoxComponent">
        <p>Категория</p>
        <CheckboxComponent headers={checkboxHeaders} />
      </div>
      <div className="filterBoxBtn">
        <PrimaryBtn text="Применить фильтр" />
        <SecondaryBtn text="Сбросить фильтр" />
      </div>
    </div>
  );
};

export default FilterForBestBox;
