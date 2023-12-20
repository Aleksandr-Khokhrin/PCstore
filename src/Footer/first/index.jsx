import "./style.css";
import FooterSecond from "../second";

import phoneIcon from "../img/phoneIcon.svg";
import locationIcon from "../img/locationIcon.svg";
import clockIcon from "../img/clockIcon.svg";
import label from "../../Header/img/logo.svg";

//accordeon
import accordCompany from "../img/accordeon/accordCompany.svg";
import accordServes from "../img/accordeon/accordServes.svg";
import accordHelp from "../img/accordeon/accordHelp.svg";
import accordProjects from "../img/accordeon/accordProjects.svg";
import arrow from "../../Header/img/footer/arrow.svg";

const FooterFirst = () => {
  return (
    <div className="footerFirst">
      <div className="footerFirstOne box borderBox">
        <img src={label} alt="" />
      </div>
      <div className="footerFirstTwo accord box">
        <p>Компания</p>
        <span>Контакты</span>
        <span>О нас</span>
        <span>Наше производство </span>
        <span>Почему мы?</span>
        <span>Новости</span>
      </div>
      <div className="footerFirstThree accord box">
        <p>Услуги</p>
        <span>Апгрейд</span>
        <span>Диагностика</span>
      </div>
      <div className="footerFirstFour accord box">
        <p>Поддержка</p>
        <span>Доставка</span>
        <span>Способ оплаты</span>
        <span>FAQ</span>
        <span>Гарантия</span>
        <span>База знаний</span>
      </div>
      <div className="footerFirstFive accord box">
        <p>Проекты</p>
        <span>Блогеры</span>
        <span>Уникальные проекты</span>
        <span>Игровые клубы</span>
        <span>Киберспорт</span>
      </div>
      <div className="accordeonBox">
        <div className="footerFirstOne box borderBox accord">
          <img src={label} alt="" />
        </div>
        <div className="accordeonBoxChild">
          <div className="footerFirstTwo box">
            <div className="accordChildTitle borderBox">
              <div className="title">
                <img src={accordCompany} alt="" />
                <p>Компания</p>
              </div>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="accordeonContent none">
              <span>Контакты</span>
              <span>О нас</span>
              <span>Наше производство </span>
              <span>Почему мы?</span>
              <span>Новости</span>
            </div>
          </div>
          <div className="footerFirstThree box">
            <div className="accordChildTitle borderBox">
              <div className="title">
                <img src={accordServes} alt="" />
                <p>Услуги</p>
              </div>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="accordeonContent none">
              <span>Апгрейд</span>
              <span>Диагностика</span>
            </div>
          </div>
        </div>
        <div className="accordeonBoxChild">
          <div className="footerFirstFour box">
            <div className="accordChildTitle borderBox">
              <div className="title">
                <img src={accordHelp} alt="" />
                <p>Поддержка</p>
              </div>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="accordeonContent none">
              <span>Доставка</span>
              <span>Способ оплаты</span>
              <span>FAQ</span>
              <span>Гарантия</span>
              <span>База знаний</span>
            </div>
          </div>
          <div className="footerFirstFive box">
            <div className="accordChildTitle borderBox">
              <div className="title">
                <img src={accordProjects} alt="" />
                <p>Проекты</p>
              </div>
              <div className="arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="accordeonContent none">
              <span>Блогеры</span>
              <span>Уникальные проекты</span>
              <span>Игровые клубы</span>
              <span>Киберспорт</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSecondFix">
        <FooterSecond />
      </div>
      <div className="footerFirstSix box">
        <div className="sixBox borderBox">
          <div className="sixBoxRow">
            <img src={phoneIcon} alt="" />
            <p>Телефоны</p>
          </div>
          <div className="sixBoxCol">
            <span>+ 998 (97) 124-24-24</span>
            <span>+ 998 (99) 124-24-24</span>
          </div>
        </div>
        <div className="sixBox borderBox">
          <div className="sixBoxRow">
            <img src={locationIcon} alt="" />
            <p>Адреса</p>
          </div>
          <div className="sixBoxCol">
            <span>г. Ташкент, Трц. Малика, Магазин 24</span>
            <span>г. Ташкент, ул. Навои 37</span>
          </div>
        </div>
        <div className="sixBox borderBox">
          <div className="sixBoxRow">
            <img src={clockIcon} alt="" />
            <p>Режим работы</p>
          </div>
          <div className="sixBoxCol">
            <span>Ежедневно с 10:00 до 20:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFirst;
