import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom"
import Not_found from './components/Not_found'
import Products from './components/DanhSachSanPham/Products'
import ProductItem from "./components/DanhSachSanPham/ProductItem"

function App() {

  return (
    <>
    
      <BrowserRouter>
      <nav>
        <Link to="/">Home </Link> |
        <Link to="/about">About </Link> |
        <Link to="/contact">Contact </Link>
        <Link to="/products">Products</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Not_found/>}/>
        
          <Route path="/products" element={<Products/>}>
          <Route path="/products:id" element={ProductItem}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
