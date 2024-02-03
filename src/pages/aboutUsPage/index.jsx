import { useState, useEffect } from "react";

import LinkBox from "../../elements/linkBox";

import "./style.css";
import img from "./img.png";
import picture from "./picture.png";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutUs">
      <LinkBox header="О компании" main="О компании" />
      <div className="aboutUsBody">
        <div className="aboutUsBodyUp">
          <img src={img} alt="" />
        </div>
        <div className="aboutUsBodyDown">
          <div>
            <h5>Компания UPGrade</h5>
            <p>
              Компания UPGrade была основана в 2009 году. Мы — официальный
              партнер таких известных технологических гигантов как NVIDIA,
              Intel, Microsoft. Нам также удалось реализовать несколько успешных
              совместных проектов с такими известными игровыми кампаниями как
              Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.
            </p>
            <p>
              Главный офис UPGrade и производственный центр расположены в
              Москве. Шоурум со компьютерами и периферией находятся в Москве. Мы
              осуществляем доставку компьютеров по всей России и миру. Наша
              компания работает как с частными, так и с юридическими лицами.
            </p>
            <p>
              Создавать лучшие компьютеры, которые будут дарить геймерами
              творческим профессионалам удовольствие от использования.
            </p>
          </div>
          <div>
            <img src={picture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
