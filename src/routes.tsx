import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Erro } from './pages/Error/error'
import { Sobre } from './pages/Sobre'
import { Produto } from './pages/Produto'
import { Contatos } from './pages/Contatos'
import { Contato } from './pages/Contato'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='/contatos' element={<Contatos />} />
        <Route path='/contatos/:id' element={<Contato />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
