import { useState } from "react";
import { Link } from "react-router-dom";

import SecondaryBtn from "../../../../elements/btns/secondary/index";
import "./style.css";

const NewsList = (props) => {
  const [count, setCount] = useState(1);
  const { data } = props;

  const countListElems = () => {
    setCount((count) => count + 1)
  }

  const renderList = data?.slice(0, 5 * count).map((item, i) => {
    return (
      <Link key={i} className="LinkForProduct" to={`/news/${item.id}`}>
        <div className="oneNewsForList">
          <h4>{item.title}</h4>
        </div>
      </Link>
    );
  });

  return (
    <div className="newsListBox">
      <div className="ANewsBoxHeader">
        <h3>Другие новости</h3>
      </div>
      <div className="renderListBox">
        {renderList}
        <div className="moreNews" onClick={countListElems}>
          <SecondaryBtn text="Больше новостей" />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
