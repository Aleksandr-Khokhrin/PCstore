import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import LinkBox from "../../elements/linkBox";

import { fetchProducts } from "../../redux/slices/products";
import BasketHEader from "./basketHeader";
import "./style.css";

const BasketPage = () => {
  const dispatch = useDispatch();
  const myArray = useSelector(
    (state) => state.products.products.items.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, []);

  const headerClickHandler = (elem) => {
    console.log(elem)
  }
  return (
    <div className="basketBox">
      <LinkBox main="Корзина" />
      <BasketHEader sum={10} headerClick={headerClickHandler}/>
    </div>
  );
};

export default BasketPage;
