import "./style.css";

const PrimaryBtn = (props) => {
  return (
    <>
      {props.type ? (
        <button type={`${props.type}`} className="primaryBtn">
          {props.text}
        </button>
      ) : (
        <button className="primaryBtn">{props.text}</button>
      )}
    </>
  );
};

export default PrimaryBtn;
