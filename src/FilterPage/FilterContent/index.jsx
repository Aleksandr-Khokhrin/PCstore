import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/products";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import NavigationPage from "../../elements/navigation";
import Assembly from "../../elements/assembly";
import "./style.css";

const FilterContent = (props) => {
  const myArray = useSelector((state) => state.products.products.items);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [boxCount, setBoxCount] = useState(12);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(["игровые сборки"]));
  }, []);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    setBoxCount(Number(props.pageNum))
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, boxCount, pagesCount, props.pageNum]);
  const renderBoxes = myArray
    .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
    .map((item, index) =>
      item.category === "Игровые сборки" ? (
        <Assembly key={index} item={item} prodTehno={true} />
      ) : null
    );

    const pagesHandler = (elem) => {
      setPagesCount(elem);
    }
  const countPageHandler = (elem) => {
    pagesHandler(elem)
    // setPagesCount(elem);
    scroll.scrollToTop({
      duration: 2800, // Длительность анимации в миллисекундах
      smooth: 'easeInOutQuart', // Тип анимации (по вашему выбору)
    });
  };

  return (
    <div className="filterBodyBox windowTwo">
      <div className="filterBodyBoxMain">{renderBoxes}</div>
      <div className="paginationPageForFilter">
        {myArray?.length ? 
        <NavigationPage
          countPage={countPageHandler}
          maxElems={Math.ceil(myArray?.length / props.pageNum)}
          pages={pagesClick}
          elements={myArray?.length}
          page="filter"
          type="Лучшие предложения"
        />
        : null}
      </div> 
        
    </div>
  );
};

export default FilterContent;
