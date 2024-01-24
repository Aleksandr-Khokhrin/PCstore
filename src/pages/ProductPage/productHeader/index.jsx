import { Link } from "react-router-dom";


import './style.css'

const ProductHeader = (props) => {
    return (
        <div className="headerForProduct">
        <div className="linkBoxForProduct">
          <Link className="LinkForProdict" to="/">
            <p>Главная</p><p>/</p>
          </Link>
          <Link className="LinkForProdict" to="/category/Наушники">
            <p>Категория</p>
            <p>/</p>
          </Link>
          <p style={{ color: "var(--text)" }}>
            {props.data.title}
          </p>
        </div>
        <div className="FPHLdown">
          <p>
            {props.data.title}
          </p>
        </div>
      </div>
    )
}

export default ProductHeader;