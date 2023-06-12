import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Produtos from './pages/Produtos'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/produtos/:id" element={<Produtos />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
