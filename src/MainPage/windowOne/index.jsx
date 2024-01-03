import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBannersSlider } from "../../redux/slices/banners";

import "./style.css";

import SecondaryBtn from "../../elements/btns/secondary";
import PrimaryBtn from "../../elements/btns/primary";

import arrow from "../../Header/img/footer/arrow-right.svg";
import arrowleft from "../../Header/img/footer/arrow-left.svg";

const WindowOne = () => {
  const dispatch = useDispatch();
  const dataBanners = useSelector((state) => state.banners.banners);
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchBannersSlider());
  }, []);

  const currentItem = dataBanners.items[index];
  let currentItemBefore;
  if (index !== 0) {
    currentItemBefore = dataBanners.items[index - 1];
  } else {
    currentItemBefore = dataBanners.items[dataBanners.items.length - 1];
  }
  // console.log(currentItem)
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? dataBanners.items.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === dataBanners.items.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="paddingTop">
      <div className="windowOne">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${currentItem?.picture})`,
          }}
        >
          <div className="content">
            <h3 className="titleH">{currentItem?.title}</h3>
            <p className="titleP">{currentItem?.text}</p>
            <div className="contentBtnForWindowOne">
              {currentItem?.buttons[0] ? (
                <PrimaryBtn text={currentItem?.buttons[0]?.text} />
              ) : null}
              {currentItem?.buttons[1] ? (
                <SecondaryBtn text={currentItem?.buttons[1]?.text} />
              ) : null}
            </div>
          </div>
          <div className="navigation">
            <div className="arrow left" onClick={handlePrev}>
              <img src={arrowleft} alt="" />
            </div>
            <div className="arrow right" onClick={handleNext}>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="navigationBar">
            <div className="navigationBarBody">
              {dataBanners.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`locationBar ${
                    item === currentItem ? "active" : ""
                  }`}
                  style={{
                    background:
                      item === currentItem ? "var(--bgSearchImg)" : "",
                    border:
                      item === currentItem
                        ? "2px solid var(--bgSearchImg)"
                        : "",
                  }}
                  data={item}
                ></div>
              ))}
            </div>
          </div>
          <img
            style={{ display: "none" }}
            src={currentItem?.picture}
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowOne;
