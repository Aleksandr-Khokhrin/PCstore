import "./style.css";

const Description = (props) => {
  return (
    <div>
      <div
        className="categoryBodyBox description"
        style={{ padding: "calc(1.4vw + 15px)", gap: "calc(1.4vw + 15px)" }}
      >
        {props.info.map((elem, i) => {
          return (
            <div className="descChild">
              <p className="descChildName">{elem[0]}</p>
              <p>{elem[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
