import { useState, useEffect } from "react";
import "./style.css";

const PrimaryInput = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const { placeholder, type, disabled } = props;
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleSearchChange}
        disabled={disabled}
      />
    </>
  );
};

export default PrimaryInput;
