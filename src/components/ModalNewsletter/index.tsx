import { useModalNewsletter } from '@/context/modalNewsletter/useModalNewsletter'
import ModalDialog from '@/components/ModalDialog'
import styles from './ModalNewsletter.module.scss'

const ModalNewsletter = () => {
    const { modalEstaAberto, fecharModal } = useModalNewsletter()

    return (
        <ModalDialog
            titulo="E-mail cadastrado com sucesso!"
            estaAberto={modalEstaAberto}
            onFechar={fecharModal}
        >
            <section className={styles.conteudo}>
                <p className={styles.texto}>
                    Em breve você receberá novidades exclusivas da Meteora.
                </p>
            </section>
        </ModalDialog>
    )
}

export default ModalNewsletter
