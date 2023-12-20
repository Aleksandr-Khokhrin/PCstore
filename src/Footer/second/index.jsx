import './style.css'

import burger from '../img/hamburger.svg'
import pc from '../../Header/img/footer/computer.svg'
import settings from '../../Header/img/footer/settings.svg'


const FooterSecond = () => {
  return (
    <div className="footerSecond">
      <div className='footerSecondChild one'>
        <img src={burger} alt="" />
        <p>Каталог</p>
      </div>
      <div className='footerSecondChild two'>
        <img src={pc} alt="" />
        <p>Купить компьютер</p>
      </div>
      <div className='footerSecondChild three'>
        <img src={settings} alt="" />
        <p>Конфигуратор</p>
      </div>
    </div>
  );
};

export default FooterSecond;
