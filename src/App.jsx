import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom"
import Not_found from './components/Not_found'
import Products from './components/DanhSachSanPham/Products'
import ProductDetail from './components/DanhSachSanPham/ProductDetail'

function App() {

  return (
    <>
    <BrowserRouter>
    
    <nav>
      <Link to="/">HOME</Link> | 
      <Link to="/contact">CONTACT</Link> | 
      <Link to="/about">ABOUT</Link> |

      {/* Cau2 */}
      <Link to="/abc">Link sai</Link> | 
      {/* Cau 3 */}
      <Link to="/products">Product List</Link>
    </nav>


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

      {/* Cau 2 */}
      <Route path='*' element={<Not_found/>}></Route>

      {/* Cau 3 */}
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:id' element={<ProductDetail/>}></Route>

    </Routes>
    
    
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App
