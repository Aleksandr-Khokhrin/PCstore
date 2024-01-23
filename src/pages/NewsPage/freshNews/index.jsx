import PrimaryBtn from "../../../elements/btns/primary";
import "./style.css";

const FreshNews = (props) => {
  const { newsData } = props;
  const truncatedText = newsData.text[0].slice(0, 200) + "…";

  return (
    <div className="freshNewsBox">
      <div className="freshNewsLeft">
        <p>{newsData.title}</p>
        <p>{truncatedText}</p>
        <div>
          <PrimaryBtn text="Читать полностью" />
        </div>
      </div>
      <div className="freshNewsRight">
        <img src={newsData.picture} alt="" />
      </div>
    </div>
    
  );
};

export default FreshNews;
