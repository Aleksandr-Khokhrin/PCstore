import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/products";

import WatchAll from "../../../elements/watchAll";
import Assembly from "../../../elements/assembly";
import "./style.css";

const WindowTwo = () => {
  const myArray = useSelector((state) => state.products.products.items.products);
  const dispatch = useDispatch()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [boxCount, setBoxCount] = useState(4);

  useEffect(() => {
    dispatch(fetchProducts(['игровые сборки']))
  }, [])
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth <= 1400 && 800 < windowWidth) {
      setBoxCount(3)
    } else if (windowWidth <= 800) {
      setBoxCount(2)
    }else {
      setBoxCount(4)
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, boxCount]);

  const renderBoxes = myArray?.slice(0, boxCount).map((item, index) => (
    <Assembly key={index} item={item} prodTehno={true} />
  ));
  

  return (
    <div className="windowTwo">
      <h3 className="titleH">Купить ПК</h3>
      <div className="pBoxFowWIndowTwo">
        <p className="titleP">
          Создаём компьютеры, которые будут дарить геймерам и творческим
          профессионалам удовольствие от использования.
        </p>
        <WatchAll page='category' type='Игровые Сборки'/>
      </div>
      <div className="productBox">
        {renderBoxes}
      </div>
    </div>
  );
};

export default WindowTwo;
