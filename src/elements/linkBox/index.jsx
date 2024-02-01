import "./style.css";
import { Link } from "react-router-dom";

const LinkBox = (props) => {
  const { other, main, header } = props;
  return (
    <div className="linkField">
      <div className="linkBox">
        <Link className="LinkForProduct" to="/">
          <p>Главная</p>
          <p>/</p>
        </Link>
        {other ? (
          <Link className="LinkForProduct" to="/">
            <p>Другая</p>
            <p>/</p>
          </Link>
        ) : null}
        <p>{main}</p>
      </div>
      {
        header ? <h2>{header}</h2> : null
      }
    </div>
  );
};

export default LinkBox;
