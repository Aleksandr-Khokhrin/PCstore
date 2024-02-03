import "./style.css";
import config from "./config.svg";
import PrimaryBtn from "../../../elements/btns/primary";
const WindowFour = () => {
  return (
    <div className="windowFour">
      <div className="windowFourLeft">
        <h3 className="titleH">Конфигуратор</h3>
        <p className="titleP windowFourLeftText">
          Конфигуратор системного блока UPGrade поможет подобрать комплектацию
          ПК и проверить комплектующие на совместимость.Выбирайте, сравнивайте
          характеристики, заказывайте дополнительные опции для создания
          конфигурации своей мечты!
        </p>
        <div className="titlePFor100px">
          <p className="titleP">
            Конфигуратор системного блока UPGrade поможет подобрать комплектацию
            ПК и проверить комплектующие на совместимость.
          </p>
          <p className="titleP">
            Выбирайте, сравнивайте характеристики, заказывайте дополнительные
            опции для создания конфигурации своей мечты!
          </p>
        </div>
        <div className="contentBtnForWindowOne">
          <PrimaryBtn text='Конфигуратор'/>
        </div>
      </div>
      <div className="windowFourRight">
        <div>
          <img src={config} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WindowFour;
