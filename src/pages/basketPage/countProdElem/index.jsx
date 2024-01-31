import { useState, useEffect } from "react";

import "./style.css";

const CountProdElem = (props) => {
  const [prodCount, setProdCount] = useState(props.sum);

  useEffect(() => {
    props.prodCount(prodCount)

  }, [prodCount])
  const prodCountHandler = (e) => {
    if (e.target.textContent === "+") {
      setProdCount((prodCount) => prodCount + 1);
    } else if (e.target.textContent === "-" && prodCount > 0) {
      setProdCount((prodCount) => prodCount - 1);
    } else {
      setProdCount(0);
    }
  };
  return (
    <div className="productCountBox">
      <p>Количество:</p>
      <div className="productCountBtnBox">
        <div className="productCountBtn" onClick={prodCountHandler}>
          -
        </div>
        <div className="productCountBtnSum">{prodCount}</div>
        <div className="productCountBtn" onClick={prodCountHandler}>
          +
        </div>
      </div>
    </div>
  );
};

export default CountProdElem;
