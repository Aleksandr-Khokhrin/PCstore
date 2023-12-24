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
  

  // const data = dataBanners.items
  // const dataBanners = [
  //   {
  //     title: "NVIDIA GEFORCE RTX 4060/4060TI",
  //     content:
  //       "Содержание 1Создаём компьютеры, которые будут дарить геймерам и творческим профессионалам удовольствие от использования.",
  //     img: "https://kartinkof.club/uploads/posts/2022-09/1662267183_1-kartinkof-club-p-novie-i-krasivie-kartinki-kompyuter-2.jpg",
  //   },
  //   {
  //     title: "Intel Core i9 12900K",
  //     content:
  //       "2880 by 1800 resolution, 16:10 aspect ratio, 0.2 ms response time, 550 nits peak brightness, 100% DCI-P3 color gamut",
  //     img: "https://i0.wp.com/blog.cyberpowerpc.com/wp-content/uploads/2021/08/How-to-Quickly-Speed-Up-Your-Gaming-PC-512337236-1630170304996.jpg?fit=3262%2C2215&ssl=1",
  //   },
  //   {
  //     title: "ASUS Zenbook S 13 OLED",
  //     content:
  //       "Lighten up your life with the ultra-thin and super-light Zenbook S 13 OLED! This 1 cm-thin2, 1 kg-light3 marvel uses efficient 13th Gen Intel® Core™ Processors.",
  //     img: "https://wowion.com/wp-content/uploads/2023/06/high-angle-gaming-setup-indoors-2048x1365.jpg",
  //   },
  //   {
  //     title: "The Boy Who Lived",
  //     content:
  //       "The Shire is a region in J.R.R. Tolkien's Middle-earth, featured prominently in 'The Hobbit' and 'The Lord of the Rings' trilogy.",
  //     img: "https://aionsigs.com/wp-content/uploads/2022/04/Ive-Got-Bad-News-About-Lord-Of-The-Rings-Undying-Lands.jpg",
  //   },
  //   {
  //     title: "VivoBook S13 S333JQ",
  //     content:
  //       "ASUSTeK COMPUTER INC. and its affiliated entities companies use cookies and similar technologies to perform essential online functions, such as authentication and security",
  //     img: "https://cgbmyski.ru/wp-content/uploads/f/e/b/feba0c1e0465b8bc4cdcf0dc15db0bf0.jpeg",
  //   },
  //   {
  //     title: "Asus EeeTop PC ET1611PUT",
  //     content:
  //       "Intel Atom / 1800 МГц / 2048 Мб / 250 Гб / 15.6' / Intel GMA 3150 / 0+256 Мб  / нет / / 3.100 кг",
  //     img: "https://i.pinimg.com/originals/22/cd/49/22cd4956942260782903766911b0906b.jpg",
  //   },
  // ];

  const currentItem = dataBanners.items[index];
  let currentItemBefore;
  if (index !== 0) {
    currentItemBefore = dataBanners.items[index - 1];
  } else {
    currentItemBefore = dataBanners.items[dataBanners.items.length - 1];
  }
  console.log(currentItem)
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
              {
                currentItem?.buttons[0] ? 
                <PrimaryBtn text={currentItem?.buttons[0]?.text} />
                : null
              }
              {
                currentItem?.buttons[1] ? 
                <SecondaryBtn text={currentItem?.buttons[1]?.text} />
                : null
              }
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
