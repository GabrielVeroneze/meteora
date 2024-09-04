import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import ProdutosCategoria from '@/pages/ProdutosCategoria'
import ResultadosPesquisa from '@/pages/ResultadosPesquisa'
import EmConstrucao from '@/pages/EmConstrucao'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="produtos/:categoria" element={<ProdutosCategoria />} />
                    <Route path="search" element={<ResultadosPesquisa />} />
                    <Route path="lojas" element={<EmConstrucao />} />
                    <Route path="novidades" element={<EmConstrucao />} />
                    <Route path="promocoes" element={<EmConstrucao />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
