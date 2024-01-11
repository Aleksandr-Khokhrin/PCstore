import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";

const getQueryString = function (parameter) {
  var href = window.location.href;
  var reg = new RegExp("[?&]" + parameter + "=([^&#]*)", "i");
  var string = reg.exec(href);
  return string ? parseInt(string[1]) : null;
};

const PriceRange = (props) => {
  const { start, end } = props;
  const [minValue, setMinValue] = useState(
    parseInt(getQueryString("minval")) || start
  );
  const [maxValue, setMaxValue] = useState(
    parseInt(getQueryString("maxval")) || end
  );
  useEffect(() => {
    // console.log(`start ${start}`);
    // console.log(`end ${end}`);
    // console.log(`minValue ${minValue}`);
    // console.log(`maxValue ${maxValue}`);
  }, [start, end, maxValue, minValue]);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value);
    setMinValue(value);
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
  };

  return (
    <div className="priceRangeBox">
      <div className="priceRangeBoxInput">
        <div className="priceBox">
          <div>От:</div>
          <input
            type="number"
            value={minValue}
            onChange={handleMinInputChange}
            // min={start}
            // max={maxValue}
          />
        </div>
        <div className="priceBox">
          <div>До: </div>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxInputChange}
            // min={minValue} // Устанавливаем минимальное значение для input
            // max={end}
          />
        </div>
      </div>
      <div>
        <Slider
          range
          min={start}
          max={end}
          step={1}
          defaultValue={[minValue, maxValue]}
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;
