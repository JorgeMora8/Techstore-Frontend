import '../public/App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/Products/List/ItemListContainer'
import CartContainer from './Components/Cart/CartContainer'
import ItemDetailContainer from './Components/Products/Detail/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppContext, { getContext } from './Components/Context/AppContext'
import BrandListContainer from './Components/Products/Brand/BrandListContainer'
import OrderListContainer from './Components/Order/OrderListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import FinishPurchase from './Components/Order/FinishPurchase'


function App() {

  return (
    <>
    <AppContext>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/brand/:productBrand' element={<BrandListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/order' element={<OrderListContainer />} />
            <Route path='/done' element={<FinishPurchase />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext>
    </>
  )
}

export default App
