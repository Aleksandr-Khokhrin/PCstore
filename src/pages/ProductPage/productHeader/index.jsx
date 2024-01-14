import { Link } from "react-router-dom";


import './style.css'

const ProductHeader = () => {
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
            ASUS TUF Gaming F15 FX506HC-HN011 Graphite Black ® + (Худи) подарок
          </p>
        </div>
        <div className="FPHLdown">
          <p>
            ASUS TUF Gaming F15 FX506HC-HN011 Graphite Black ® + (Худи) подарок
          </p>
        </div>
      </div>
    )
}

export default ProductHeader;