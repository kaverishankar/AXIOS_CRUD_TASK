import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './layout/LayoutPage'

import Home from './layout/HomePage'
import Product from "./layout/ProductList"
import About from './layout/About'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home/>}/>
          <Route path="/productlist" element={<Product/>}/>
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
