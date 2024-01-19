import { useState, useEffect } from "react";

import NavigationPage from "../../../../elements/navigation";
import PrimaryBtn from "../../../../elements/btns/primary";
import Comment from "../../../../elements/userComment";
import StarBar from "../../../../elements/starBar/indes";
import "./style.css";

const ReviewBox = (props) => {
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  const pagesHandler = (elem) => {
    setPagesCount(elem);
  }
  const countPageHandler = (elem) => {
    pagesHandler(elem);
    // setPagesCount(elem);
  };


  const renderBoxes = props.info[2]
    .slice(pagesCount * 3, pagesCount * 3 + 3)
    .map((elem, i) => {
        return (
          <div className="revChild">
            <Comment autor={elem[0]} sum={elem[1]} text={elem[2]} />
          </div>
        );
        });
  return (
    <div>
      <div className="categoryBodyBox">
        <div className="categoryBodyHeader">
          <div className="evaluationBox">
            <p className="evaluation">{props.info[0][0]}</p>
            <StarBar active={false} sum={Math.floor(props.info[0][0])} />
            <p className="evaluationText">
              На основании {props.info[0][1]} отзывов
            </p>
          </div>
          <div className="ratingBox">
            <div className="ratingChild">
              <div className="ratingInfo">
                <p>5 звезд</p>
                <p>{props.info[1][4]}%</p>
              </div>
              <hr
                style={{
                  background: `linear-gradient(to right, var(--bgSearchImg) ${props.info[1][4]}%, var(--text) ${props.info[1][4]}%)`,
                }}
              />
            </div>
            <div className="ratingChild">
              <div className="ratingInfo">
                <p>4 звезды</p>
                <p>{props.info[1][3]}%</p>
              </div>
              <hr
                style={{
                  background: `linear-gradient(to right, var(--bgSearchImg) ${props.info[1][3]}%, var(--text) ${props.info[1][3]}%)`,
                }}
              />
            </div>
            <div className="ratingChild">
              <div className="ratingInfo">
                <p>3 звезды</p>
                <p>{props.info[1][2]}%</p>
              </div>
              <hr
                style={{
                  background: `linear-gradient(to right, var(--bgSearchImg) ${props.info[1][2]}%, var(--text) ${props.info[1][2]}%)`,
                }}
              />
            </div>
            <div className="ratingChild">
              <div className="ratingInfo">
                <p>2 звезды</p>
                <p>{props.info[1][1]}%</p>
              </div>
              <hr
                style={{
                  background: `linear-gradient(to right, var(--bgSearchImg) ${props.info[1][1]}%, var(--text) ${props.info[1][1]}%)`,
                }}
              />
            </div>
            <div className="ratingChild">
              <div className="ratingInfo">
                <p>1 звезда</p>
                <p>{props.info[1][0]}%</p>
              </div>
              <hr
                style={{
                  background: `linear-gradient(to right, var(--bgSearchImg) ${props.info[1][0]}%, var(--text) ${props.info[1][0]}%)`,
                }}
              />
            </div>
          </div>
          <div className="ratingBoxBtn">
            <PrimaryBtn allWidth={true} text="Оставить отзыв" />
          </div>
        </div>
        {renderBoxes}
        <div className="paginationPageForFilter" style={{paddingTop: 'calc(2vw + 12.6px)'}}>
          {props.info[2]?.length ? (
            <NavigationPage
              countPage={countPageHandler}
              maxElems={Math.ceil(props.info[2]?.length / 3)}
              pages={pagesClick}
              elements={props.info[2]?.length}
              page="filter"
              type="Лучшие предложения"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
