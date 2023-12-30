import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryBox from "../../elements/category";
import NavigationPage from "../../elements/navigation/index";
import { fetchCategories } from "../../redux/slices/categories";


import "./style.css";

import IMG from "../../elements/category/img.svg";

const WindowFive = (props) => {
  const myArray = useSelector((state) => state.categories.categories.items);
  const dispatch = useDispatch();
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [lengthArray, setLemgthArray] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
 
  const pageClickHandler = (elem) => {
    setPagesClick(elem);
  };
  const setBoxCountHandler = (elem) => {
    setBoxCount(elem);
  };
  useEffect(() => {
    setLemgthArray(myArray.length);
  }, [myArray.length]);

  useEffect(() => {
    setA(pagesCount * boxCount);
    console.log(pagesCount * boxCount, pagesCount * boxCount + boxCount);
    setB(pagesCount * boxCount + boxCount);
    console.log(lengthArray);
  }, [boxCount, pagesCount, a, b, lengthArray]);

  useEffect(() => {
    if (windWidth <= 1300 && 800 < windWidth) {
      pageClickHandler(false);
      setBoxCountHandler(6);
    } else if (windWidth <= 800) {
      pageClickHandler(true);
      setBoxCountHandler(4);
    } else {
      pageClickHandler(false);
      setBoxCountHandler(8);
    }
    setWindWidth(props.windowWidth);
  }, [windWidth, pagesClick, props.windowWidth]);
  const renderBoxes = 
    windWidth <= 800
      ? myArray.slice(pagesCount * boxCount, pagesCount * boxCount + boxCount).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={item.picture ? item.picture : IMG} />;
        })
      : windWidth <= 1300 && windWidth > 800
      ? myArray.slice(a, b).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={item.picture ? item.picture : IMG} />;
        })
      : myArray.slice(a, b).map((item, index) => {
          return <CategoryBox key={index} title={item.name} img={item.picture ? item.picture : IMG} />;
        });

  const countPageHandler = (elem) => {
    // console.log(elem);
    setPagesCount(elem);
  };

  return (
    <div className="windowFive">
      <div className="windowFiveHeader">
        <h3 className="titleH">ПЕРиФеРИЯ</h3>
        <div className="NavigationPageForFiveWindow">
          <NavigationPage
            countPage={countPageHandler}
            pages={pagesClick}
            elements={myArray.length}
            fullBar={true}
            maxElems={Math.ceil(myArray.length / boxCount)}
            text="ПЕРиФеРИЯ"
          />
        </div>
      </div>
      <div className="categoryPart">{renderBoxes}</div>
    </div>
  );
};

export default WindowFive;
