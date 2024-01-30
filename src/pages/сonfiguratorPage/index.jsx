import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import { fetchProducts } from "../../redux/slices/products";

import LinkBox from "../../elements/linkBox";


import "./style.css";

const ConfiguratorPage = () => {
  const dispatch = useDispatch();
  const myArray = useSelector(
    (state) => state.products.products.items.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="configuratorBox">
      <LinkBox main='Конфигуратор'/>
    </div>
  );
};

export default ConfiguratorPage;
