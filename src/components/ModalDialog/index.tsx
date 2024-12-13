import { useEffect, useRef } from 'react'
import { Modal } from '@/types/Modal'
import BotaoIcone from '@/components/BotaoIcone'
import icones from '@/assets/icons'
import styles from './ModalDialog.module.scss'

interface ModalDialogProps extends Modal {
    children: React.ReactNode
    titulo: string
}

const ModalDialog = ({ children, titulo, estaAberto, onFechar }: ModalDialogProps) => {
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

export default ModalDialog
