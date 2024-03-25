import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Erro } from './pages/Error/error'
import { Contatos } from './pages/Contatos'
import { Detalhes } from './pages/Detalhes'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/contatos' element={<Contatos />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
