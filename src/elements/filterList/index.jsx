import { useState, useEffect } from "react";
import "./style.css";
import array from "../../Header/img/footer/arrow-right.svg";

const FilterList = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`category-dropdown`}
      style={
        props.sizeStop && windowWidth < 800
          ? { width: "200px" }
          : props.sizeStop && windowWidth < 1400
          ? { width: "240px" }
          : { width: "calc(15.6vw + 17px)" }
      }
    >
      <div
        className={`category-dropdown-div ${isDropdownOpen ? "open" : ""}`}
        style={
          props.sizeStop && windowWidth < 800
            ? { width: "200px" }
            : props.sizeStop && windowWidth < 1400
            ? { width: "240px" }
            : { width: "auto" }
        }
      >
        <input
          type="text"
          placeholder={props.unknown}
          value={selectedCategory || ""}
          readOnly
          className={`${isDropdownOpen ? "activeInput" : ""}`}
          style={
            props.sizeStop && windowWidth < 1400
              ? {fontSize: "16px" }
              : { padding: "16px 32px" }
          }
        />
        <div
          className={`category-dropdown-img ${isDropdownOpen ? "rotate" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={array} alt="" />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          className="dropdown-list"
          style={
            props.sizeStop && windowWidth < 800
              ? { width: "200px" }
              : props.sizeStop && windowWidth < 1400
              ? { width: "240px" }
              : { width: "calc(15.6vw + 17px)" }
          }
        >
          {props.categories.map((category, index) =>
            index + 1 < props.categories.length ? (
              <div>
                <p key={index} onClick={() => handleCategoryClick(category)}>
                  {category}
                </p>
                <hr />
              </div>
            ) : (
              <div>
                <p key={index} onClick={() => handleCategoryClick(category)}>
                  {category}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FilterList;
