import PropTypes from "prop-types"
import "./Product_module.css"

const Prod = ({ id, title, qty, price, image, removeItem, changeProd }) => {
    return (
        <div className="container">
            <img src={image} />
            <div style={{ backgroundColor: 'rgb(157, 168, 33)', padding: '2px' }}>
                <h2 style={{ textAlign: 'center' }}>{title}</h2>
                <label>Quantity: </label>
                <select value={qty}>
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                </select>
                <h3>{'Price :'} <i style={{ padding: '10px', paddingTop: '0' }} className="fa-solid fa-indian-rupee-sign">
                    {' ' + price}</i></h3>
                <button onClick={() => removeItem(id)} style={{ marginRight: '10px', backgroundColor: 'aqua' }}>{'Delete'}</button>
                <button onClick={() => changeProd(id)} style={{ backgroundColor: 'aqua' }}>{'Edit'}</button>
            </div>
        </div>)
};

Prod.PropTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    qty: PropTypes.number,
    price: PropTypes.number,
    removeItem: PropTypes.func,
    changeProd: PropTypes.func
}

export default Prod