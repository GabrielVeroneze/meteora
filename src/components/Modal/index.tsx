import { useEffect, useRef } from 'react'
import { IModal } from '@/types/IModal'
import BotaoIcone from '@/components/BotaoIcone'
import icones from '@/assets/icons'
import styles from './Modal.module.scss'

interface ModalProps extends IModal {
    children: React.ReactNode
    titulo: string
}

const Modal = ({ children, titulo, estaAberto, onFechar }: ModalProps) => {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (estaAberto) {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [estaAberto])

    return (
        <dialog className={styles.modal} ref={modalRef}>
            <header className={styles.cabecalho}>
                <h4 className={styles.titulo}>{titulo}</h4>
                <BotaoIcone icone={icones.fecharModal} onClick={onFechar} />
            </header>
            {children}
        </dialog>
    )
}

export default Modal
