import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/products";
import ProductHeader from "./productHeader";

import ProductSlider from "./productSlider";
import "./style.css";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  console.log(product);

  return (
    <div
      className="productPageBox"
      style={{ background: "var(--bg)", paddingTop: "30vh" }}
    >
      <ProductHeader />
      <div className="productPageBody">
        <ProductSlider />
        
      </div>
      {id}
    </div>
  );
};
export default ProductPage;
