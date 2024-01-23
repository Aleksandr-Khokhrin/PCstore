import arrow from './arrow.svg'
import "./style.css";

const MiddleBox = () => {

  return (
    <div className="middleBox">
      <div className="middleButton">
        <div>
            <img src={arrow} alt="" />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="68"
        viewBox="0 0 1680 68"
        fill="none"
      >
        <path
          d="M0 1H684.146C713.506 1 741.663 12.6631 762.424 33.4235L764.905 35.9049C807.471 78.4713 876.724 77.6844 918.312 34.1618V34.1618C938.551 12.9814 966.572 1 995.868 1H1680"
          stroke="#222222"
          stroke-width={window.innerWidth > 800 ? '2' : '4'}
        />
      </svg>
      <div className="middleWords">
        <p>Смотреть</p>
        <p>Самые</p>
        <p>Свежие</p>
        <p>Новости</p>
      </div>
    </div>
  );
};

export default MiddleBox;
