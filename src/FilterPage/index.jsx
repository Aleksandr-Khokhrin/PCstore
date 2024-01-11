import { useState, useEffect } from "react";
import "./style.css";

import FilterHeader from "./header";
import FilterBox from "./filterBox";
import BestOffers from "./BestOffers";
import FilterContent from "./FilterContent";
const CategoryPage = () => {
  const [pageNum, setPageNum] = useState(12)
  useEffect(() => {
    // После монтирования компонента, прокрутите страницу вверх
    window.scrollTo(0, 0);
    // Или используйте scrollIntoView
    // document.documentElement.scrollIntoView();
  }, []);
  const pageNumHandler = (elem) => {
    // console.log(elem)
    setPageNum(elem)
  }

  return (
    <div className="paddingTop">
      <div className="filterPage">
        <FilterHeader pageNum={pageNumHandler} />
        <div>
          <div className="filterBody">
            <div className="filterBodyLeft">
              <FilterBox />
              <BestOffers column={true} small={true}/>
            </div>
            <div className="filterBodyPProducts">
              <FilterContent pageNum={pageNum} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
