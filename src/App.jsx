import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Not_found from './components/Not_found'
import Products from './components/DanhSachSanPham/Products'
import ProductDetail from './components/DanhSachSanPham/ProductDetail'
import Dashboard from './components/dashboard_cau4/Dashboard'
import Order from './components/dashboard_cau4/Order'
import Profile from './components/dashboard_cau4/Profile'
import Setting from './components/dashboard_cau4/Setting'
import Checkout from './components/checkout_cau5/Checkout'
import ProductDetail_cau5 from './components/checkout_cau5/ProductDetail_cau5'

import { AuthProvider } from './components/Login_Cau6/AuthContext'
import ProtectedRoute from './components/Login_Cau6/ProtectedRoute'
import Login from './components/Login_Cau6/Login'
import Profile_cau6 from './components/Login_Cau6/Profile_cau6'
import Orders_cau6 from './components/Login_Cau6/Orders_cau6'
function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          <nav>
            <Link to="/">HOME</Link> |
            <Link to="/contact">CONTACT</Link> |
            <Link to="/about">ABOUT</Link> |

            {/* Cau2 */}
            <Link to="/abc">Link 404</Link> |
            {/* Cau 3 */}
            <Link to="/products">Product List</Link> |
            {/* cau 4 */}
            <Link to="/dashboard">Dashboard</Link> |
            {/* Câu 6 */}
            <Link to="/login">Login - Câu 6</Link> |
            <Link to="/profile-c6">Profile C6</Link> |
            <Link to="/orders-c6">Orders C6</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            {/* Cau 2*/}
            <Route path="*" element={<Not_found />}></Route>

            {/* Cau 3 */}
            <Route path='/products' element={<Products />}></Route>

            {/* cau 4 */}
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path="oder" element={<Order />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="setting" element={<Setting />}></Route>
            </Route>

            {/* cau 5 */}
            <Route path="/products/:id" element={<ProductDetail_cau5 />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* cau 6*/}
            <Route path="/login" element={<Login />} />

            <Route
              path="/profile-c6"
              element={
                <ProtectedRoute>
                  <Profile_cau6 />
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders-c6"
              element={
                <ProtectedRoute>
                  <Orders_cau6 />
                </ProtectedRoute>
              }
            />



          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App