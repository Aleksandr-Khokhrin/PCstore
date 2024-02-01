import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/slices/products";

import LinkBox from "../../elements/linkBox";

import WindowTen from "../MainPage/windowsTen";
import "./style.css";

const SupportPage = () => {
  const dispatch = useDispatch();
  const myArray = useSelector(
    (state) => state.products.products.items.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="compareBox">
      <div className="compareBoxHeader">
        <LinkBox header="Поддержка" main="Поддержка" />
      </div>
      <div>
        <WindowTen noHeader={true} noGPS={true} />
      </div>
    </div>
  );
};

export default SupportPage;
