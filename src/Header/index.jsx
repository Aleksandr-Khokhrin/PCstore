import { useState, useEffect } from "react";
import Burger from "./burger";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";
import "./style.css";

import FooterHeader from "./footerheader";
import label from "./img/logo.svg";
import search from "./img/search.svg";
import compare from "./img/compare.svg";
import heart from "./img/heart.svg";
import cart from "./img/cart.svg";
import phone from "./img/phone.svg";
import language from "./img/language.svg";
import user from "./img/user.svg";

import login from "./img/log-in-04-svgrepo-com.svg";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [hasToken, setHasToken] = useState(!!localStorage.getItem("token"));
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    // console.log(searchInput);
  }, [searchInput]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
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
    props.isAuthDelete(false);
    setHasToken(false);
  };

  if (isAuth) {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }
  return (
    <div className="HeaderMain">
      <div className="header">
        <div className="headerLeft">
          <Burger />
          <Link to="/">
            <div className="headerLeftLabel">
              <img src={label} alt="Logo" />
            </div>
          </Link>
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
            {props.isAuth ? (
              <Link to="/">
                <img src={user} alt="User" />
                <button onClick={deleteToken} className="exitBtn">
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
      <FooterHeader />
    </div>
  );
};

export default Header;
