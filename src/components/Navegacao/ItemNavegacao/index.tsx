import { NavLink } from 'react-router-dom'
import styles from './ItemNavegacao.module.scss'

interface ItemNavegacaoProps {
    to: string
    children: React.ReactNode
}

const ItemNavegacao = ({ to, children }: ItemNavegacaoProps) => {
    return (
        <li className={styles.item}>
            <NavLink to={to}>{children}</NavLink>
        </li>
    )
}

export default ItemNavegacao
