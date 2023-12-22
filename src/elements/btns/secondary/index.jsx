import "./style.css";

const SecondaryBtn = (props) => {
  return (
    <>
      {props.type ? (
        <button type={`${props.type}`} className="secondaryBtn">
          {props.text}
        </button>
      ) : (
        <button className="secondaryBtn">{props.text}</button>
      )}
    </>
  );
};

export default SecondaryBtn;
