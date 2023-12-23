import { useState, useEffect } from "react";
import "./style.css";

import FilterHeader from "./header";
import FilterBox from "./filterBox";

const CategoryPage = () => {
  
  return (
    <div className="paddingTop">
      <div className="filterPage">
        <FilterHeader/>
        <div>
          <div className="filterBody">
            <FilterBox/>
            <div className="filterBodyPProducts">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
