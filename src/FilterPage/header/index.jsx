import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

import FilterList from "../../elements/filterList";

const FilterHeader = () => {
  const { productName } = useParams();
  const [pageNum, setPageNum] = useState(24);
  const pageArray = [12, 24, 36, 48];
  const categories = [
    "по умолчанию",
    "по цене",
    "новинки",
    "лучшие предложения",
  ];
  return (
    <div className="filterPageHeader">
      <div className="filterPageHeaderLeft">
        <div className="FPHLup">
          <Link style={{textDecoration: "none" }} to="/">
            <p style={{ opacity: "0.5"}}>Главная / </p>{" "}
          </Link>
          <p style={{ color: "var(--text)" }}> {productName}</p>
        </div>
        <div className="FPHLdown">
          <p>{productName}</p>
        </div>
      </div>
      <div className="filterPageHeaderRight">
        <div className="FPHRleft">
          <p>Сортировка товара </p>
          <FilterList categories={categories} unknown="Выберите категорию" />
        </div>
        <div className="FPHRright">
          <p>Товаров на странице: </p>
          <p>
            {pageArray.map((elem, index) => (
              <span key={index}>
                {elem === pageNum ? (
                  <span style={{ color: "var(--text)" }}>{elem}</span>
                ) : (
                  <span style={{ color: "var(--textSpan)", opacity: "0.5" }}>
                    {elem}
                  </span>
                )}
                {index < pageArray.length - 1 && (
                  <span
                    style={{
                      margin: "0 8px",
                      color: "var(--textSpan)",
                      opacity: "0.5",
                    }}
                  >
                    /
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
