import styles from './Modal.module.scss'

interface ModalProps {
    children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
    return (
        <dialog className={styles.modal}>
            {children}
        </dialog>
    )
}

export default Modal
