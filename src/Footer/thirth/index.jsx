import "./style.css";

import inst from "../img/instagram.svg";
import youtube from "../img/youtube.svg";
import TM from "../img/TM.svg";
import tiktok from "../img/tiktok.svg";

const FooterThirth = () => {
  return (
    <div className="footerThirth">
      <div className="footerThirthPart">
        <div className="footerThirthChild">
          <img src={inst} alt="" />
          <div>
            <p>Instagram</p>
            <span>64.3 тыс. подписчиков</span>
          </div>
        </div>
        <div className="footerThirthChild">
          <img src={youtube} alt="" />
          <div>
            <p>Yotube</p>
            <span>70 млн. просмотров</span>
          </div>
        </div>
      </div>
      <div className="footerThirthPart">
        <div className="footerThirthChild">
          <img src={TM} alt="" />
          <div>
            <p>Telegram</p>
            <span>17.4 тыс. подписчиков</span>
          </div>
        </div>
        <div className="footerThirthChild">
          <img src={tiktok} alt="" />
          <div>
            <p>Tik Tok</p>
            <span>30 тыс. подписчиков</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterThirth;
