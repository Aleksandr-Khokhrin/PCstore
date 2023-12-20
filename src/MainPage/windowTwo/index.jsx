import { useState, useEffect } from "react";

import WatchAll from "../../elements/watchAll";
import Assembly from "../../elements/assembly";
import "./style.css";

const WindowTwo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [boxCount, setBoxCount] = useState(4);

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
  const myArray = [0, 1, 2, 3, 4, 5, 6]

  const renderBoxes = myArray.slice(0, boxCount).map((item, index) => {
    return <Assembly key={index} prodTehno={true}/>;
  });

  return (
    <div className="windowTwo">
      <h3 className="titleH">Купить ПК</h3>
      <div className="pBoxFowWIndowTwo">
        <p className="titleP">
          Создаём компьютеры, которые будут дарить геймерам и творческим
          профессионалам удовольствие от использования.
        </p>
        <WatchAll />
      </div>
      <div className="productBox">
        {renderBoxes}
      </div>
    </div>
  );
};

export default WindowTwo;
