import "./style.css";
import arrow from "../../Header/img/footer/arrow-right.svg";
const ServiceBox = (props) => {
  return (
    <div className="serviceBox">
      {props.img ? (
        <div className="serviceImg">
          <img src={props.img} alt="" />
        </div>
      ) : null}
      <div>
        <h4>{props.title}</h4>
      </div>
      {props.text !== null ? (
        <div>
          <p>{props.text}</p>
        </div>
      ) : null}
      <div
        className="serviceArrow"
        style={{ transform: `rotate(${props.degree}deg)` }}
      >
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ServiceBox;
