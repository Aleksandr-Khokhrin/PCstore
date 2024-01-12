import ServiceBox from "../../../elements/servicesBox";
import "./style.css";

import upgrade from "./img/upgrade.svg";
import diagnistics from "./img/diagnistics.svg";

const WindowThree = () => {
  return (
    <div className="windowThree">
      <h3 className="titleH ">Услуги</h3>
      <div className="windowThreeBox">
        <ServiceBox
          img={upgrade}
          title="Апгрейд"
          text="Служба поддержки"
          degree={0}
        />
        <ServiceBox
          img={diagnistics}
          title="Диагностика"
          text="Служба поддержки"
          degree={0}
        />
      </div>
    </div>
  );
};

export default WindowThree;
