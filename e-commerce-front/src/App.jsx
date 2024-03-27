import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import AdminLogin from './pages/AdminLogin'
import AdminModule from './module/AdminModule'

function App() {

  const location = useLocation();

  // Check if the current location is either /admin-login or /admin
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>

      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<ProductView />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin' element={<AdminModule/>} />
      </Routes>
      {!isAdminPage && <Footer />}

    </>
  )
}

export default App
