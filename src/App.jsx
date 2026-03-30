import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
