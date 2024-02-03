import { useState, useEffect } from "react";

import LinkBox from "../../elements/linkBox";

import "./style.css";
import img from "./img.png";
import arrow from "../../Header/img/footer/arrow-left.svg";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const myArray = [
    {
      title: "Блогеры",
      img: img,
    },
    {
      title: "Игровые клубы",
      img: img,
    },
    {
      title: "Киберспорт",
      img: img,
    },
  ];

  const renderBox = myArray.map((elem, i) => {
    return (
      <div className="progectBox">
        <div className="progectImg">
          <img src={elem.img} alt="" />
        </div>
        <div className="progectDown">
          <p>{elem.title}</p>
          <div className="progectArrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="projectsPage">
      <LinkBox header="Проекты" main="Проекты" />
      <div className="projectsBody">{renderBox}</div>
    </div>
  );
};

export default Projects;
