import { useState, useEffect } from "react";

import "./style.css";

const InfoProdElem = (props) => {
  const { data } = props;
  return (
    <div className="basketProdInfo">
      <div className="productCost">
        <div className="productCostPrice">
          {data.discount !== 0 ? (
            <p className="priceTitle">Стоимость со скидкой:</p>
          ) : (
            <p className="priceTitle">Стоимость:</p>
          )}
          <p className="priceWithDiscount">{Math.floor(data.price_discount)} сум</p>
        </div>
        {data.discount !== 0 ? (
          <div>
            <p className="price">{Math.floor(data.price)} сум</p>
          </div>
        ) : null}
      </div>
      {data.discount !== 0 ? (
        <div className="benefitBox">
          <p className="pers">{data.discount}%</p>
          <p className="persSum">
            Экономия {Math.floor(data.price - data.price_discount)} сум
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default InfoProdElem;
