import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchAuthMe } from "../../redux/slices/auth";

import LinkBox from "../../elements/linkBox";
import Assembly from "../../elements/assembly";

import "./style.css";

const FavouritesPage = () => {
  const dispatch = useDispatch();
  const myArray = useSelector((state) => state.auth.data?.wishlist);
  useEffect(() => {
    dispatch(fetchAuthMe());

    window.scrollTo(0, 0);
  }, []);
  // console.log(myArray)
  const renderBoxes = myArray
    ? myArray.map((item, index) => (
        <Assembly key={index} item={item} prodTehno={true} />
      ))
    : null;
  const headerClickForBasket = (elem) => {
    // props.headerClick(elem);
  };
  return (
    <div className="favourBox">
      <LinkBox main="Избранное" />
      <div className="favourBoxHeader">
        <h2>Избранные товары ({myArray?.length})</h2>
        <div
          className="anctionsChild"
          onClick={() => headerClickForBasket("clean")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M23 5H1M9 11V19M15 11V19M21 5V24C21 24.2652 20.8946 24.5196 20.7071 24.7071C20.5196 24.8946 20.2652 25 20 25H4C3.73478 25 3.48043 24.8946 3.29289 24.7071C3.10536 24.5196 3 24.2652 3 24V5M17 5V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H9C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Очистить корзину</p>
        </div>
      </div>
      <div className="favourBoxBody">{renderBoxes}</div>
    </div>
  );
};

export default FavouritesPage;
