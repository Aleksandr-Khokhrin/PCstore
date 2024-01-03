import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOffers } from "../../redux/slices/offersProducts";
import Assembly from "../../elements/assembly";
import NavigationPage from "../../elements/navigation";

import "./style.css";
const WindowSix = (props) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.offers.offers.items)
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(()=>{
    dispatch(fetchOffers())
  }, [])
  console.log(data[0]?.products)
  useEffect(() => {
    setWindWidth(props.windowWidth);

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
      setBoxCount(8);
      setPagesClick(false);
    }
  }, [windWidth, boxCount, pagesClick, props.windowWidth]);

  // const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const myArray = data[0]

  const renderBoxes =
    windWidth <= 800
      ? 
      data[0]?.products.slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
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
    <div className="windowFive windowSix">
      <div className="windowFiveHeader">
        <h3 className="titleH">Лучшие предложения</h3>
        <div className="NavigationPageForFiveWindow">
          <NavigationPage
            countPage={countPageHandler}
            pages={pagesClick}
            elements={data[0]?.products.length}
            windWidth={windWidth}
            page="best"
            type="Лучшие предложения"
          />
        </div>
      </div>
      <div className="productBoxForSix">{renderBoxes}</div>
    </div>
  );
};

export default WindowSix;
