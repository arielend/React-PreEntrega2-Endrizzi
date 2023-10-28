import { useAsync } from '../../hooks/useAsync'
import { getItemById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

import Loader from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const asyncFunction = () => getItemById(itemId)
    const {data: item, loading, error } = useAsync(asyncFunction, [itemId])

    if (loading) {
        return(
            <Loader/>
        )
    }

    if(!item){
        return(
            <h2>El producto seleccionado no existe</h2>
        )
    }

    if (error) {
        return(
            <h2>Hubo un problema al cargar el producto</h2>
        )
    }

    return(
        <ItemDetail greeting={'Detalle del producto: '} {...item}/>
    )
}

export default ItemDetailContainer