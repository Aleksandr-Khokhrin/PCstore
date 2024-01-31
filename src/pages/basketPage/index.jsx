import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import LinkBox from "../../elements/linkBox";

import { fetchAuthMe } from "../../redux/slices/auth";

import BasketHEader from "./basketHeader";
import BasketList from "./basketList";
import CountBox from "./basketCount";
import BasketInfo from "./basketInfo";
import "./style.css";

const BasketPage = () => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const myArray = useSelector((state) => state.auth.data?.basket);
  useEffect(() => {
    dispatch(fetchAuthMe());
    window.scrollTo(0, 0);
  }, []);
  const headerClickHandler = (elem) => {
    // console.log(elem)
  };

  useEffect(() => {
    let totalQty = 0;
    if (myArray) {
      myArray.forEach((item) => {
        totalQty += item.qty;
      });
      setSum(totalQty);
    }
  }, [myArray]);

  return (
    <div className="basketBox">
      <LinkBox main="Корзина" />
      <BasketHEader
        sum={sum}
        data={myArray}
        headerClick={headerClickHandler}
      />
      <div className="basketBody">
        <div className="basketBodyLeft">
          {myArray ? <BasketList data={myArray} /> : null}
          <BasketInfo data={myArray} />
        </div>
        <div className="basketBodyRight">
          <CountBox data={myArray} />
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
