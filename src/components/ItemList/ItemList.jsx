import classes from './itemList.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className={classes.itemList}>
            {
                products.map(prod => {
                    return(
                        <Item key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList 