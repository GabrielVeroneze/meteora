import { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
    children: React.ReactNode
    estaAberto: boolean
}

const Modal = ({ children, estaAberto }: ModalProps) => {
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
            {children}
        </dialog>
    )
}

export default Modal
