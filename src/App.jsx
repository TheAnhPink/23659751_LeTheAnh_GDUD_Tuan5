import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Not_found from './components/Not_found'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <nav>
        <Link to="/">Home </Link> |
        <Link to="/about">About </Link> |
        <Link to="/contact">Contact </Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Not_found/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
