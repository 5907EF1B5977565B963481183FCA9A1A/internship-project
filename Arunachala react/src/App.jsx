
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


import Aboutus from './pages/Aboutus'
import SingleProduct from './pages/SingleProduct'
import Products from './pages/Products'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/Aboutus' element={<Aboutus />}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
      


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
