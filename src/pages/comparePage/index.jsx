import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import { fetchProducts } from "../../redux/slices/products";

import LinkBox from "../../elements/linkBox";


import "./style.css";

const ComparePage = () => {
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
      <LinkBox main='Сравнение'/>
    </div>
  );
};

export default ComparePage;
