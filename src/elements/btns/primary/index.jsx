import "./style.css";

const PrimaryBtn = (props) => {
  return (
    <>
      {props.type ? (
        <button type={`${props.type}`} className="primaryBtn" style={props.allWidth ? {width: '100%'} : null}>
          {props.text}
        </button>
      ) : (
        <button className="primaryBtn" style={props.allWidth ? {width: '100%'} : null}>{props.text}</button>
      )}
    </>
  );
};

export default PrimaryBtn;
