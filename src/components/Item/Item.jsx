import classes from '../Item/item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock, description}) => {
    return(
        <div className={classes.itemCard}>
            <h2>{name}</h2>
            <img className={classes.cardImg} src={img} alt="" />
            <h3>Precio: $ {price}</h3>
            <h3>Stock: {stock}</h3>
            <Link to={`/item/${id}`} className={classes.itemCardButton}>Ver detalle</Link>
        </div>
    )
}

export default Item