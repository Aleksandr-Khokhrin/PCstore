import PrimaryInput from "../../../elements/inputs/inputPrimary";
import "./style.css";

const BasketInfo = () => {
  return (
    <div className="basketInfo">
      <h3>Ваши личные данные</h3>
      <div className="basketInfoChild">
        <div>
          <p>Имя:</p>
          <PrimaryInput type="text" placeholder="Ваше имя" />
        </div>
        <div>
          <p>Номер телефона:</p>
          <PrimaryInput type="text" placeholder="Ваш номер..." />
        </div>
      </div>
      <h3>Способ доставки</h3>
      <div className="basketInfoChild Two">
        <div className="">
          <PrimaryInput type="text" placeholder="Курьер" disabled={true}/>
          <PrimaryInput type="text" placeholder="Самовывоз" disabled={true}/>
        </div>
        <div className="">
          <PrimaryInput type="text" placeholder="Выберите магазин" />
        </div>
      </div>
    </div>
  );
};

export default BasketInfo;
