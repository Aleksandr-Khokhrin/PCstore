import { useState, useEffect } from "react";
import "./style.css";

import BestHeader from "./header";
import FilterForBestBox from "./BestBox";
// import YourProductComponent from "./YourProductComponent"; // Замените на ваш компонент с товарами

const BestPage = () => {
  useEffect(() => {
    // После монтирования компонента, прокрутите страницу вверх
    window.scrollTo(0, 0);

    // Или используйте scrollIntoView
    // document.documentElement.scrollIntoView();
  }, []);
  
  return (
    <div className="paddingTop">
      <div className="filterPage">
        <BestHeader />
        <div>
          <div className="filterBody">
            <FilterForBestBox />
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
