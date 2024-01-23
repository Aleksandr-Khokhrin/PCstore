import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../FilterPage/style.css";

import BestBurger from "../BestBurger";
const BestHeader = (props) => {
  const { productName } = useParams();
  return (
    <div className="filterPageHeader">
      <div className="filterPageHeaderLeft best" style={{gap: '20px'}}>
        <div className="FPHLup">
          <Link style={{textDecoration: "none" }} to="/">
            <p style={{ opacity: "0.5"}}>Главная / </p>{" "}
          </Link>
          <p style={{ color: "var(--text)" }}> {productName}</p>
        </div>
        <div className="FPHLdown" style={{marginBottom: '15px'}}>
          <p>{productName}</p>
        </div>
        <BestBurger checkboxHeaders={props.checkboxHeaders}/>
      </div>
    </div>
  );
};

export default BestHeader;
