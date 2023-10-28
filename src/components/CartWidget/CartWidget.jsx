import cartIcon from './assets/icon-cart.svg'
import classes from './cartWidget.module.css'

const CartWidget = () => {
    return(
        <>
        <button className={classes.cartWidget}>
            <img src={cartIcon} alt='Carrito de compras'/>
            <span>0</span>            
        </button>
        </>
    )
}

export default CartWidget