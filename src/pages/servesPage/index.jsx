import { useState, useEffect } from "react";

import LinkBox from "../../elements/linkBox";

import PrimaryBtn from "../../elements/btns/primary";
import SecondaryBtn from "../../elements/btns/secondary";

import "./style.css";
import img from "./img.png";

const ServesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="servesBox">
      <div className="compareBoxHeader">
        <LinkBox main="Услуги" />
      </div>
      <div className="servesBoxChild">
        <h2>Апгрейд</h2>
        <div className="servesBoxChildContent">
          <div className="freshNewsBox">
            <div className="freshNewsLeft">
              <p>Что такое апгрейд</p>
              <p>
                Опыт работы с иностранными команиями, а так же на международном
                рынке: Турция, Америка, Китай еще много разных стран с которыми
                мы сотруднисчаем на протяжении долгого. Опыт работы с
                иностранными команиями, а так же на международном рынке: Турция,
                Америка, Китай еще много разных. Опыт работы с иностранными
                команиями, а так же на Китай еще много разных. Опыт работы с
                иностранными{" "}
              </p>
              <div className="btnServes">
                <PrimaryBtn text="Заказать услугу" />
                <SecondaryBtn text="Поробнее" />
              </div>
            </div>
            <div className="freshNewsRight">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="servesBoxChild">
        <h2>Диагностика</h2>
        <div className="servesBoxChildContent">
          <div className="freshNewsBox">
            <div className="freshNewsLeft">
              <p>Что такое диагностика</p>
              <p>
                Опыт работы с иностранными команиями, а так же на международном
                рынке: Турция, Америка, Китай еще много разных стран с которыми
                мы сотруднисчаем на протяжении долгого. Опыт работы с
                иностранными команиями, а так же на международном рынке: Турция,
                Америка, Китай еще много разных. Опыт работы с иностранными
                команиями, а так же на Китай еще много разных. Опыт работы с
                иностранными{" "}
              </p>
              <div className="btnServes">
                <PrimaryBtn text="Заказать услугу" />
                <SecondaryBtn text="Поробнее" />
              </div>
            </div>
            <div className="freshNewsRight">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServesPage;
