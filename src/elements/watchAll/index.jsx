import "./style.css";
import { Link } from "react-router-dom";
const WatchAll = (props) => {
  const { page, type } = props;
  return (
    <Link to={`/${page}/${type}`} className="linkWay">
      <div className="link">
        <p>Смотреть все</p>
      </div>
    </Link>
  );
};

export default WatchAll;
