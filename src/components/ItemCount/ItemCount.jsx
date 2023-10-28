import { useCount } from '../../hooks/useCount'
import classes from './itemCount.module.css'

const ItemCount = ({stock, onAdd}) => {

    const {count, decrement, increment} = useCount((stock>0 ? 1 : 0), stock)

    return(
        <div className={classes.itemCount}>
            <button onClick={decrement} disabled={stock==0}>decrement</button>
            <label>{count}</label>
            <button onClick={increment} disabled={stock==0}>increment</button>
            <button onClick={() => onAdd(count)} disabled={count==0}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount