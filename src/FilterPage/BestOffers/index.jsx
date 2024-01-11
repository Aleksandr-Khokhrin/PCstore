// import { useState, useEffect } from 'react';

// import './style.css'

// const BestOffers = (props) => {

//     return (
//         <div className='bestOffersBox'>
//             <h3>Лучшие предложения</h3>
//             <div>

//             </div>
//         </div>
//     )
// }

// export default BestOffers;
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers } from "../../redux/slices/offersProducts";
import Assembly from "../../elements/assembly";
import NavigationPage from "../../elements/navigation";

import "./style.css";
const BestOffers = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.offers.offers.items);
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);
  // console.log(data[0]?.products)
  useEffect(() => {
    setWindWidth(props.windowWidth);
    if (props.windowWidth) {
      if (windWidth <= 1400 && 800 < windWidth) {
        setBoxCount(6);
        setPagesClick(false);
      } else if (windWidth <= 400) {
        setPagesClick(true);
        setBoxCount(2);
      } else if (windWidth <= 800) {
        setPagesClick(true);
        setBoxCount(4);
      } else {
        setBoxCount(6);
        setPagesClick(false);
      }
    } else {
      setBoxCount(3);
      setPagesClick(false);
    }
  }, [windWidth, boxCount, pagesClick, props.windowWidth]);

  const renderBoxes =
    windWidth <= 800
      ? data[0]?.products
          .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
          .map((item, index) => {
            return <Assembly key={index} item={item} prodTehno={false} />;
          })
      : data[0]?.products.slice(0, boxCount).map((item, index) => {
          return <Assembly key={index} item={item} prodTehno={false} />;
        });

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };

  return (
    <div
      className="bestOffersBox"
      style={
        props.column ? { flexDirection: "column", gap: "calc(6vw - 66px)" } : ""
      }
    >
      <h3>Лучшие предложения</h3>
      <div
        className="productBoxForSix"
        style={
          props.column
            ? {
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px",
              }
            : ""
        }
      >
        {renderBoxes}
      </div>
      <NavigationPage
        countPage={countPageHandler}
        pages={pagesClick}
        elements={data[0]?.products.length}
        windWidth={windWidth}
        page="best"
        type="Лучшие предложения"
        flexStart={true}
      />
    </div>
  );
};

export default BestOffers;
