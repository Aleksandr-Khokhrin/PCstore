import React, { useState } from "react";
import './style.css'
const CheckboxComponent = ({ headers }) => {
  const initialCheckboxes = Object.fromEntries(
    headers.map((header) => [header, false])
  );

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const handleSubmit = () => {
    const activeCheckboxes = Object.keys(checkboxes).filter(
      (checkbox) => checkboxes[checkbox]
    );
    console.log("Active Checkboxes:", activeCheckboxes);
  };

  return (
    <div className="checkBox">
      {headers.map((header, index) => (
        <div key={index} className="checkBoxComp">
          <div className="checkBoxTitle">
            <label key={index}>
              <input
                type="checkbox"
                checked={checkboxes[header.title]}
                onChange={() => handleCheckboxChange(header)}
              />
              {header.title}
            </label>
          </div>
          <div className="checkBoxSum">
            {header.sum}
          </div>
        </div>
      ))}
      {/* <br /> */}
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default CheckboxComponent;
