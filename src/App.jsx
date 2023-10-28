import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  
  return(
        
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path={'/'} element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
        <Route exact path={'/category/:categoryId'} element={<ItemListContainer greeting={'Acá podes ver nuestros/as: '}/>}/>
        <Route exact path={'/item/:itemId'} element={<ItemDetailContainer greeting={'Detalles del producto'}/>}/>
        <Route exact path={'/cart'} element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )  
}

export default App
