import { useModalNewsletter } from '@/context/modalNewsletter/useModalNewsletter'
import Modal from '@/components/Modal'
import styles from './ModalNewsletter.module.scss'

const ModalNewsletter = () => {
    const { modalEstaAberto, fecharModal } = useModalNewsletter()

    return (
        <Modal
            titulo="E-mail cadastrado com sucesso!"
            estaAberto={modalEstaAberto}
            onFechar={fecharModal}
        >
            <section className={styles.conteudo}>
                <p className={styles.texto}>
                    Em breve você receberá novidades exclusivas da Meteora.
                </p>
            </section>
        </Modal>
    )
}

export default ModalNewsletter
