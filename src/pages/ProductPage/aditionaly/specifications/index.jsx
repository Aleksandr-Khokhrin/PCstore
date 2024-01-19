import "./style.css";

const Specifications = (props) => {
  return (
    <div>
      <div className="categoryBodyBox spec">
          {props.info.map((elem, i) => {
            return (
              <div
                className="specChild"
                style={
                  i + 1 < props.info.length
                    ? { borderBottom: "1px solid var(--borderInput)" }
                    : null
                }
              >
                <p className="specChildName">{elem[0]}</p>
                <p>{elem[1]}</p>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Specifications;
