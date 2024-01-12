import "./style.css";
import StarBar from "../../../elements/starBar/indes";

import array from "../../../Header/img/footer/arrow-right.svg";

const WindowTwelve = () => {
  const onClickFromChildHandler = () => {};
  return (
    <div className="windowTwelve">
      <h3 className="titleH">Отзывы клиентов</h3>
      <div className="windowTwelveBody">
        <div className="windowTwelveBodyChild">
          <p className="titleWinTW">Общий рейтинг</p>
          <p className="bigText">95%</p>
        </div>
        <div className="windowTwelveBodyChild">
              <p className="titleWinTW">Yandex.uz</p>
          <div className="secondBoxTwelve">
              <p className="textWinTW">Оставить свой отзыв</p>
            <div className="footerImgTw">
              <img src={array} alt="" />
            </div>
          </div>
        </div>
        <div className="windowTwelveBodyChild">
          <StarBar active={true} sum={3}/>
          <p className="textWinTW">95% покупателей купили бы здесь снова</p>
        </div>
        <div className="windowTwelveBodyChild">
          <p className="titleWinTW">2357</p>
          <p className="textWinTW">Положительных оценок за все время работы</p>
        </div>
        <div className="windowTwelveBodyChild">
          <p className="titleWinTW">5.0</p>
          <p className="textWinTW">
            Общий рейтинг магазина за последние 3 месяца
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowTwelve;
