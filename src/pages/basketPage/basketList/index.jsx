import { useState, useEffect } from "react";

import "./style.css";
import CountProdElem from "../countProdElem";
import InfoProdElem from "../infoProdElem";
import LikeElem from "../../../elements/likeElem";

const BasketList = (props) => {
  const [like, setLike] = useState(false);
  const { data } = props;
  // console.log(data);

  const prodCountHandler = (e) => {
    // console.log(e);
  };
  const onClickFromChildHandler = (data) => {
    setLike(data);
    // console.log(data);
  };

  const basketList = data.map((elem, i) => {
    return (
      <div className="baksetProd">
        <div className="basketProdMain">
          <div className="basketProdImg">
            <img src={elem ? elem.product.pictures : null} alt="" />
            <input type="checkbox" />
          </div>
          <div className="basketProdNameBox">
            <div className="basketProdName">
              <p>Товар:</p>
              <p>{elem ? elem.product.title : null}</p>
            </div>
            <CountProdElem sum={elem.qty} prodCount={prodCountHandler} />
          </div>
        </div>
        <div className="basketProdInfoBox">
          <InfoProdElem data={elem.product} />
          <div className="likeAndDelete">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M18 0.642858L0.643048 18L0.000197624 17.3571L17.3571 7.04454e-07L18 0.642858Z"
                  fill="#DCDCDC"
                />
                <path
                  d="M0.64285 0L17.9998 17.3571L17.357 18L0 0.642857L0.64285 0Z"
                  fill="#DCDCDC"
                />
              </svg>
            </div>
            <LikeElem onClickFromChild={onClickFromChildHandler} />
          </div>
        </div>
      </div>
    );
  });

  return <div className="basketList">{basketList}</div>;
};

export default BasketList;
