import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../redux/slices/categories";
import "./style.css";

import BestHeader from "./header";
import FilterForBestBox from "./BestBox";

const BestPage = () => {
  const myArray = useSelector((state) => state.categories.categories.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  console.log(myArray)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="paddingTop">
      <div className="filterPage">
        <BestHeader checkboxHeaders={checkboxHeaders}/>
        <div>
          <div className="filterBody">
            <FilterForBestBox checkboxHeaders={checkboxHeaders}/>
            <div className="filterBodyPProducts">
              {/* Вставьте свои компоненты или контент здесь */}
              {/* <YourProductComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPage;
