import "./style.css";
import ServiceBox from "../../elements/servicesBox";
import forGame from "./img/forGame.svg";
import forWork from "./img/forWork.svg";
import params from "./img/params.svg";
const WindowSeven = () => {
  return (
    <div className="windowSeven">
      <h3 className="titleH ">Услуги</h3>
      <div className="categoryForSevenBox">
        <div>
          <p>Категория</p>
        </div>
        <div className="boxCat">
          <div className="categoryForSeven">
            <ServiceBox img={forGame} title="Для игр" degree={90} />
            <ServiceBox img={forWork} title="Для работы" degree={90} />
            <ServiceBox img={params} title="По параметрам" degree={90} />
          </div>
        </div>
        <div>
          <p>Параметры</p>
        </div>
        <div className="boxCat">
          <div className="categoryForSeven">
            <ServiceBox title="По цене" degree={90} />
            <ServiceBox title="По видеокарте" degree={90} />
            <ServiceBox title="По процессору" degree={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowSeven;
