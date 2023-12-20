import './style.css'
const ProductBar = (props) => {
    return (
        <div className="productBar">
            {
                props.discount !== 0 ?
                <div className="discount">{props.discount}%</div>
                : null
            }
            {
                props.top ?
                <div className="top">Хит</div>
                : null
            }
            {
                props.newProd ?
                <div className="newProduct">Новый</div>
                : null
            }
        </div>
    )
}

export default ProductBar;