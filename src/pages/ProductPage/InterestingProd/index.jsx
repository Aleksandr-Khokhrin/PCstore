import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/products";

import NavigationPage from "../../../elements/navigation";
import Assembly from "../../../elements/assembly";
import "./style.css";

const InterestProd = () => {
  const myArray = useSelector((state) => state.products.products.items);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(["игровые сборки"]));
  }, []);
  const pagesHandler = (elem) => {
    setPagesCount(elem);
  };
  const countPageHandler = (elem) => {
    pagesHandler(elem);
    // setPagesCount(elem);
  };

  const renderBoxes = myArray
    .slice(0, 4)
    .map((item, index) =>
      item.category === "Игровые сборки" ? (
        <Assembly key={index} item={item} prodTehno={true} />
      ) : null
    );

  return (
    <div className="interestProd">
      <div className="windowTwo">
        <p className="interestProdTitle">Вам также может понравиться</p>
        <div className="productBox" style={{ flexWrap: "wrap" }}>
          {renderBoxes}
        </div>
        <div
          className="paginationPageForFilter"
          style={{ paddingTop: "calc(2vw + 12.6px)" }}
        >
          {myArray?.length ? (
            <NavigationPage
              countPage={countPageHandler}
              maxElems={Math.ceil(myArray?.length / 3)}
              pages={pagesClick}
              elements={myArray?.length}
              page="filter"
              type="Лучшие предложения"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InterestProd;
