import ItemCount from '../ItemCount/ItemCount'
import classes from './itemDetail.module.css'

const ItemDetail = ({id, name, img, price, stock, description, greeting}) => {

    const handleOnAdd = (quantity) => {
        console.log(`${quantity} item/s agregado/s al carrito`);

    }
    return(
        <>
            <h1>{greeting} {id}</h1>
            <div className={classes.itemDetail}>
                <div className={classes.itemDetailImg}>
                    <img className={classes.img} src={img} alt={name} />
                </div>
                <div className={classes.itemDetailDesc}>
                    <h2 style={{textAlign:'center'}}>{name}</h2>
                    <h3>Precio: ${price}</h3>
                    <h3>Stock: {stock}</h3>
                    <p>Descripción: {description}</p>                
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail