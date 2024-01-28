import "./style.css";

const CountProd = (props) => {
  return (
    <div
        className="countProd"
        style={
            props.sum > 0
            ? { backgroundColor: "var(--bgSearchImg)" }
            : {
                backgroundColor: "var(--bgInput)",
                border: "1px solid var(--borderInput)",
                }
        }
        >
        <p>{props.sum}</p>
    </div>
  );
};

export default CountProd;
