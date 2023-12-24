import { useState, useEffect } from "react";
import "./style.css";

import FilterHeader from "./header";
import FilterBox from "./filterBox";
// import YourProductComponent from "./YourProductComponent"; // Замените на ваш компонент с товарами

const CategoryPage = () => {
  useEffect(() => {
    // После монтирования компонента, прокрутите страницу вверх
    window.scrollTo(0, 0);

    // Или используйте scrollIntoView
    // document.documentElement.scrollIntoView();
  }, []);
  
  return (
    <div className="paddingTop">
      <div className="filterPage">
        <FilterHeader />
        <div>
          <div className="filterBody">
            <FilterBox />
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

export default CategoryPage;
