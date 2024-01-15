import { useState, useEffect } from "react";
import Equalizer from "../../../elements/equalaizer";
import StarBar from "../../../elements/starBar/indes";
import "./style.css";

import PrimaryBtn from "../../../elements/btns/primary";
import SecondaryBtn from "../../../elements/btns/secondary";

const ProdDescription = () => {
  const [wrap, setWrap] = useState(true);
  const [existence, setProdTexno] = useState(true);
  const [discount, setDiscount] = useState(8);
  const [prodCount, setProdCount] = useState(1);
  const [prodColor, setProdColor] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  let disc = 2940960;
  let sum = 3342000;
  let persSum = sum - disc;
  let pers = 100 - Math.round((disc * 100) / sum);

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

  const colors = ["white", "black", "red"];

  return (
    <div className="prodDescriptionBox">
      <div className="prodDescriptionFirst">
        <div className="prodDescriptionFirstUp">
          <div className="descFirst">
            {existence ? (
              <div className="existence">• В наличии</div>
            ) : (
              <div className="unExistence">• Нет в наличии</div>
            )}
            <StarBar active={true} sum={4} />

            <div className="productCost">
              <div className="productCostPrice">
                {discount ? (
                  <p className="priceTitle">Цена со скидкой:</p>
                ) : (
                  <p className="priceTitle">Цена:</p>
                )}
                <p className="priceWithDiscount">{disc} сум</p>
              </div>
              {discount ? (
                <div>
                  <p className="price">{sum} сум</p>
                </div>
              ) : null}
            </div>
            <div className="benefitBox">
              <p className="pers">{pers}%</p>
              <p className="persSum">Экономия {persSum} сум</p>
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
          </div>
          <div className="productBtnBox">
            <SecondaryBtn text="Купить в один клик" />
            <PrimaryBtn text="В корзину" />
          </div>
        </div>
      </div>
      <div className="prodDescriptionSecond">
        <div>
          <p>Производитель:</p>
          <p style={{ fontWeight: "700" }}>Hyper X</p>
        </div>
        <div>
          <p>Артикул:</p>
          <p style={{ fontWeight: "700" }}>hyperx-cloud-ii-red</p>
        </div>
      </div>
    </div>
  );
};

export default ProdDescription;
