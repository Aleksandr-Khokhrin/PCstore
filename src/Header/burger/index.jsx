import { useState, useEffect } from 'react';


import burger from "../img/burger.svg";
import cross from "../img/cross.svg";
import './burger.css'

const Burger = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };
    return (
        <div className="burger" >
          <div className={`menu-btn ${isMenuActive ? "active" : ""}`}>
            <div className='burgerIcon' onClick={toggleMenu}>
              <img src={burger} alt="" />
            </div>
          </div>
          <div className={`menu ${isMenuActive ? "active" : ""}`}>
            <nav className="burgerList">
              <ul>
                <li>Сравнение</li>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
                <li>Язык</li>
                <li>Личный кабинет</li>
              </ul>
              <div className='burgerIcon cross' onClick={toggleMenu}>
                <img src={cross} alt=""/>
              </div>
            </nav>
          </div>
        </div>
    )
}

export default Burger;