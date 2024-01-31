import { useState, useEffect } from "react";
import Equalizer from "../../../elements/equalaizer";
import StarBar from "../../../elements/starBar/indes";
import "./style.css";

import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";

const ProdDescription = (props) => {
  const { data } = props;
  const [wrap, setWrap] = useState(true);
  const [prodCount, setProdCount] = useState(1);
  const [prodColor, setProdColor] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth < 1400) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }, [windowWidth, wrap]);
  const prodCountHandler = (e) => {
    if (e.target.textContent === "+") {
      setProdCount((prodCount) => prodCount + 1);
    } else if (e.target.textContent === "-" && prodCount > 0) {
      setProdCount((prodCount) => prodCount - 1);
    } else {
      setProdCount(0);
    }
  };
  const prodColorHandler = (e) => {
    const clickedColor = e.currentTarget.dataset.name;
    setActiveColor((prevColor) =>
      prevColor === clickedColor ? null : clickedColor
    );
  };

  const colors = Array.isArray(data.colors) ? data.colors : [];
  // const colors = ["white", "black", "red"];

  return (
    <div className="prodDescriptionBox">
      <div className="prodDescriptionFirst">
        <div className="prodDescriptionFirstUp">
          <div className="descFirst">
            {data.in_stock ? (
              <div className="existence">• В наличии</div>
            ) : (
              <div className="unExistence">• Нет в наличии</div>
            )}
            <StarBar active={true} sum={data.avg_rating} />

            <div className="productCost">
              <div className="productCostPrice">
                {data.discount ? (
                  <p className="priceTitle">Цена со скидкой:</p>
                ) : (
                  <p className="priceTitle">Цена:</p>
                )}
                <p className="priceWithDiscount">{Math.floor(data.price_discount)} сум</p>
              </div>
              {data.discount ? (
                <div>
                  <p className="price">{Math.floor(data.price)} сум</p>
                </div>
              ) : null}
            </div>
            <div className="benefitBox">
              <p className="pers">{data.discount}%</p>
              <p className="persSum">
                Экономия {Math.floor(data.price - data.price_discount)} сум
              </p>
            </div>
          </div>
          {wrap ? (
            <div className="prodEqualizer">
              <Equalizer />
            </div>
          ) : null}
        </div>
        <div className="prodDescriptionFirstDown">
          <div className="countAndColorProd">
            <div className="productCountBox">
              <p>Количество:</p>
              <div className="productCountBtnBox">
                <div className="productCountBtn" onClick={prodCountHandler}>
                  -
                </div>
                <div className="productCountBtnSum">{prodCount}</div>
                <div className="productCountBtn" onClick={prodCountHandler}>
                  +
                </div>
              </div>
            </div>
            {colors.length !== 0 ? (
              <div className="productColorBox">
                <p>Цвет: {prodColor !== null ? prodColor : ""}</p>
                <div className="productColorBtnBox">
                  {colors.map((elem, i) => {
                    return (
                      <div
                        key={i}
                        data-name={elem}
                        className={`productColorBtn ${
                          activeColor === elem ? "activeColorBtn" : ""
                        }`}
                        style={{ background: elem }}
                        onClick={prodColorHandler}
                      ></div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <div className="productBtnBox">
            <SecondaryBtn text="Купить в один клик" />
            <PrimaryBtn text="В корзину" />
          </div>
        </div>
      </div>
      <div className="prodDescriptionSecond">
        <div>
          <p>Производитель: </p>
          <p style={{ fontWeight: "700" }}> {data.brand} </p>
        </div>
        <div>
          <p>Артикул: </p>
          <p style={{ fontWeight: "700" }}>{data.articul}</p>
        </div>
      </div>
    </div>
  );
};

export default ProdDescription;
