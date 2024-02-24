import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Erro } from './pages/error/error'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
