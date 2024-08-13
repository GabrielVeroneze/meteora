import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import ProdutosCategoria from '@/pages/ProdutosCategoria'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="produtos/:categoria" element={<ProdutosCategoria />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
