import { Routes, BrowserRouter, Route } from "react-router-dom"
import Product from "./pages/product/product"
import Home from "./pages/home/home"
import Liked from "./pages/liked/liked"



const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/liked" element={<Liked/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App