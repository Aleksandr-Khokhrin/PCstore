import { useState } from "react";
import "./style.css";
import array from "../../Header/img/footer/arrow-right.svg";

const FilterList = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`category-dropdown `}>
      <div className={`category-dropdown-div ${isDropdownOpen ? "open" : ""}`}>
        <input
          type="text"
          placeholder={props.unknown}
          value={selectedCategory || ""}
          readOnly
          className={`${isDropdownOpen ? "activeInput" : ""}`}
        />
        <div
          className={`category-dropdown-img ${isDropdownOpen ? "rotate" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={array} alt="" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-list">
          {props.categories.map((category, index) => (
            <p key={index} onClick={() => handleCategoryClick(category)}>
              {category}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterList;
