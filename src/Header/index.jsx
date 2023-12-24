import { useState, useEffect } from "react";
import Burger from "./burger";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";
import "./style.css";

import label from "./img/logo.svg";
import search from "./img/search.svg";
import compare from "./img/compare.svg";
import heart from "./img/heart.svg";
import cart from "./img/cart.svg";
import phone from "./img/phone.svg";
import language from "./img/language.svg";
import user from "./img/user.svg";
import arrow from "./img/footer/arrow.svg";
import hamburger from "./img/footer/hamburger.svg";
import computer from "./img/footer/computer.svg";
import settings from "./img/footer/settings.svg";
import login from "./img/log-in-04-svgrepo-com.svg";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hasToken, setHasToken] = useState(!!localStorage.getItem("token"));
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, [localStorage.getItem("token")]); 
  useEffect(() => {
    // console.log(searchInput);
  }, [searchInput]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const toggleCategoryList = () => {
    setCategoryListVisible(!isCategoryListVisible);
  };

  const headerRightItems = [
    { img: compare, text: "Сравнение" },
    { img: heart, text: "Избранное" },
    { img: cart, text: "Корзина" },
    { img: phone, text: "Контакты" },
    { img: language, text: "Язык" },
  ];

  const deleteToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    props.isAuthDelete(false)
    setHasToken(false);
  };

  const categoryList = [
    "Купить компьютер",
    "Конфигуратор",
    "Услуги",
    "Поддержка",
    "О компании",
    "Проекты",
    "Новости",
    "Скидки",
    "Хит продаж",
    "Новинки",
  ];

  if (isAuth) {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }
  return (
    <div className="HeaderMain">
      <div className="header">
        <div className="headerLeft">
          <Burger />
          <div className="headerLeftLabel">
            <img src={label} alt="Logo"/>
          </div>
          <div className="headerLeftSearch">
            <input
              type="text"
              placeholder="Найти, HyperX Cloud Alpha"
              onChange={handleSearchChange}
            />
            <img src={search} alt="Search" />
          </div>
        </div>
        <div className="headerRight">
          {headerRightItems.map((item, index) => (
            <div key={index} className="headerRightChild">
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
          <div className="headerRightChild person">
            { props.isAuth  ? (
              <Link to="/">
                <img src={user} alt="User" />
                <button
                  onClick={deleteToken}
                  style={{
                    background: "var(--bg)",
                    position: "absolute",
                    right: "5em",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  exit
                </button>
              </Link>
            ) : (
              <Link to="/log">
                <img src={login} alt="login" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={`${visible ? "visible" : "hiddenFooter"}`}>
        <div className="footerForHeader">
          <div className="mainChildForHeadFooter">
            <img src={hamburger} alt="Hamburger" />
            <p>Каталог</p>
          </div>
          <div
            onClick={toggleCategoryList}
            className={`mainChildForHeadFooter arrow ${
              isCategoryListVisible ? "rotate" : ""
            }`}
          >
            <p>Каталог товаров</p>
            <img
              src={arrow}
              alt="Arrow"
              style={
                isCategoryListVisible
                  ? { transform: "rotate(45deg)", transition: "all 0.3s" }
                  : { transition: "all 0.3s" }
              }
            />
            <div
              className={`categoryList ${isCategoryListVisible ? "" : "none"}`}
            >
              {categoryList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="childForHeadFooter">
            <img src={computer} alt="Computer" />
            <p>Купить компьютер</p>
          </div>
          <div className="childForHeadFooter">
            <img src={settings} alt="Settings" />
            <p>Конфигуратор</p>
          </div>
          <div className="justcategory">
            <p>Услуги</p>
          </div>
          <div className="justcategory">
            <p>Поддержка</p>
          </div>
          <div className="justcategory">
            <p>О компании</p>
          </div>
          <div className="justcategory">
            <p>Проекты</p>
          </div>
          <div className="justcategory">
            <p>Новости</p>
          </div>
          <div className="lastCategory">
            <p>Скидки</p>
            <hr />
          </div>
          <div className="lastCategory">
            <p>Хит продаж</p>
            <hr />
          </div>
          <div className="lastCategory">
            <p>Новинки</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
