import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/products";

import StarBar from "../../elements/starBar/indes";
import Equalizer from "../../elements/equalaizer";
import InterestProd from "./InterestingProd";

import WindowSix from "../MainPage/windowSix";
import Aditionally from "./aditionaly";
import ProductHeader from "./productHeader";
import ProdDescription from "./prodDescription";
import ProductSlider from "./productSlider";

import "./style.css";

const ProductPage = (props) => {
  const { windowWidth } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct.item);
  useEffect(() => {
    dispatch(fetchProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  console.log(product)
  // console.log(product);

  return (
    <div className="productPageBox">
      <ProductHeader data={product}/>
      <div className="productPageBody">
        <div className="hideProductBox">
          <StarBar active={true} sum={product.avg_rating} />
          <Equalizer row={true} />
        </div>
        <ProductSlider  data={product}/>
        <ProdDescription data={product}/>
      </div>
      <Aditionally windowWidth={windowWidth} />
      <InterestProd
        fullBar={true}
        bestOffers={true}
        windowWidth={windowWidth}
      />
      <div style={{paddingTop: '1em', width: '100%'}}>
        <WindowSix fullBar={true} bestOffers={true} windowWidth={windowWidth} />
      </div>
      {/* {id} */}
    </div>
  );
};
export default ProductPage;
