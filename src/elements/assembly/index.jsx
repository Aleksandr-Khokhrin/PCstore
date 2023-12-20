// assembly.js
import { useState, useEffect } from "react";
import LikeElem from "../likeElem";
import StarBar from "../starBar/indes";
import ProductBar from "../productBar";

import "./style.css";
import img from "./img/img 1.png";
import equalizer from "./img/equalizer.svg";
const Assembly = (props) => {
  const [like, setLike] = useState(false);
  const [discount, setDiscount] = useState(8);
  const [top, setTop] = useState(true);
  const [newProd, setNewProd] = useState(true);
  const [existence, setExistence] = useState(true);
  const [prodTehno, setProdTexno] = useState(true);

  useEffect(() => {
    // console.log(`родительский лайк ${like}`);
    setProdTexno(props.prodTehno);
  }, [like, prodTehno]);

  const onClickFromChildHandler = (data) => {
    setLike(data);
  };

  return (
    <div className="product">
      <div className="productImg">
        <img className="mainImg" src={img} alt="" />

        {prodTehno ? (
          <>
            <StarBar active={false} sum={2}/>
            <div className="likeElem">
              <LikeElem onClickFromChild={onClickFromChildHandler} />
              <div className="equalaizer">
                <img src={equalizer} alt="" />
              </div>
            </div>
          </>
        ) : null}
        {discount !== null || top || newProd ? (
          <div className="productBarBox">
            <ProductBar discount={discount} top={top} newProd={newProd} />
          </div>
        ) : null}
      </div>
      <div className="productInfo">
        <p className="productInfoTile">Сборка #12</p>
        {prodTehno ? (
          <div className="productTehno">
            <div className="cpuInfo">
              <p>CPU:</p>
              <p>Intel Core i9 12900K</p>
            </div>
            <hr />
            <div className="cpuInfo">
              <p>GPU:</p>
              <p>RTX 4080 16GB</p>
            </div>
            <hr />
            <div className="cpuInfo">
              <p>RAM:</p>
              <p>32GB/1TB</p>
            </div>
          </div>
        ) : null}
          {prodTehno ? (
            existence ? (
              <div className="existence">• В наличии</div>
            ) : (
              <div className="unExistence">• Нет в наличии</div>
            )
          ) : null}
        <div className="productCost">
          <div className="priceWithDiscountBox">
            {discount ? (
              <p className="priceTitle">Цена со скидкой:</p>
            ) : (
              <p className="priceTitle">Цена:</p>
            )}
            <p className="priceWithDiscount">25 178 000 сум</p>
          </div>
          {discount ? (
            <div>
              <p className="price">29 578 000 сум</p>
            </div>
          ) : null}
        </div>
        {prodTehno ? (
          <div className="contentBtnForWindowOne">
            <button className="searchPC">Купить</button>
            <button className="config">В корзину</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Assembly;
