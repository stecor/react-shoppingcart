import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Product from './pages/Product'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
