import { useState, useEffect } from "react";

import "./style.css";
import PrimaryInput from "../../../elements/inputs/inputPrimary";
import PrimaryBtn from "../../../elements/btns/primary";
const CountBox = (props) => {
  const [discount, setDiscount] = useState(0);
  const [sum, setSum] = useState(0);
  const { data } = props;

  useEffect(() => {
    let totalQty = 0;
    if (data) {
      data.forEach((item) => {
        console.log(item.product.price_discount * item.qty);
        totalQty += item.product.price_discount * item.qty;
      });
      setDiscount(totalQty);
    }
  }, [data]);
  //   console.log(data);

  return (
    <div className="countBox">
      <h3>Ваш заказ:</h3>
      <div className="countAllSum">
        <div className="basketProdInfo">
          <div className="productCost">
            <div className="productCostPrice">
              <p className="priceTitle">Товар на сумму: </p>
              {discount !== 0 ? (
                <p className="price">{Math.floor(sum)} сум</p>
              ) : null}
              <p className="priceWithDiscount">{Math.floor(discount)} сум</p>
            </div>
          </div>
          {discount !== 0 ? (
            <div className="benefitBox">
              <p className="persSum">
                Экономия {Math.floor(sum - discount)} сум
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="countAllSum">
        <div className="basketProdInfo">
          <div className="productCost">
            <div className="productCostPrice">
              <p className="priceTitle">Промокод </p>
              <PrimaryInput type="text" placeholder="Вводить сюда" />
              <PrimaryBtn text="Использовать" />
            </div>
          </div>
        </div>
      </div>
      <div className="countAllSum">
        <div className="basketProdInfo">
          <div className="productCost">
            <div className="productCostPrice info">
              <div>
                <p className="priceTitle">Промокод: </p>
                <p className="priceTitle"> 0 сум </p>
              </div>
              <div>
                <p className="priceTitle">Доставка: </p>
                <p className="priceTitle">- </p>
              </div>
              <div>
                <p className="priceTitle">Ташкент: </p>
                <p className="priceTitle">Бесплатно </p>
              </div>
              <div>
                <p className="priceTitle">Другие города: </p>
                <p className="priceTitle">Обговариваем </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="countAllSum">
        <div className="basketProdInfo">
          <div className="productCost">
            <div className="productCostPrice">
              <p className="priceTitle">И того к оплате: </p>
              {discount !== 0 ? (
                <p className="priceWithDiscount">{Math.floor(sum)} сум</p>
              ) : null}
            </div>
          </div>
          <PrimaryBtn text="Оформить заказ" />
        </div>
      </div>
    </div>
  );
};

export default CountBox;
