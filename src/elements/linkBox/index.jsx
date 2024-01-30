import "./style.css";
import { Link } from "react-router-dom";

const LinkBox = (props) => {
  const { other, main } = props;
  return (
    <div className="linkBox">
      <Link className="LinkForProduct" to="/">
        <p>Главная</p>
        <p>/</p>
      </Link>
      {other ? (
        <Link className="LinkForProduct" to="/">
          <p>Главная</p>
          <p>/</p>
        </Link>
      ) : null}
      <p>{main}</p>
    </div>
  );
};

export default LinkBox;
