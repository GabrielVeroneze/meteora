import ModalProdutoInfo from './ModalProdutoInfo'
import ModalProdutoOpcao from './ModalProdutoOpcao'
import BotaoIcone from '@/components/BotaoIcone'
import Botao from '@/components/Botao'
import icones from '@/assets/icons'
import imagemProduto from '@/assets/images/produtos/jaqueta-jeans.png'
import styles from './ModalProduto.module.scss'

const ModalProduto = () => {
    return (
        <div className={styles.modal}>
            <header className={styles.cabecalho}>
                <h4 className={styles.titulo}>
                    Confira detalhes sobre o produto
                </h4>
                <BotaoIcone icone={icones.fecharModal} />
            </header>
            <section className={styles.conteudo}>
                <img className={styles.imagem} src={imagemProduto} alt="Pessoa em pé contra fundo claro e monocromático, vestindo jaqueta jeans sobre moletom preto e gorro escuro." />
                <ModalProdutoInfo
                    nome="Jaqueta Jeans"
                    descricao="Modelo unissex oversized com gola de camurça. Atemporal e autêntica!"
                    preco={150.00}
                    fornecedor="Vendido e entregue por Riachuelo"
                />
                <form className={styles.formulario}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Cores:</legend>
                        <ModalProdutoOpcao
                            id="azul-claro"
                            name="cor"
                            label="Azul claro"
                        />
                        <ModalProdutoOpcao
                            id="offwhite"
                            name="cor"
                            label="Offwhite"
                        />
                        <ModalProdutoOpcao
                            id="preto"
                            name="cor"
                            label="Preto"
                        />
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Tamanho:</legend>
                        <ModalProdutoOpcao
                            id="tamanho-p"
                            name="tamanho"
                            label="P"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-pp"
                            name="tamanho"
                            label="PP"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-m"
                            name="tamanho"
                            label="M"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-g"
                            name="tamanho"
                            label="G"
                        />
                        <ModalProdutoOpcao
                            id="tamanho-gg"
                            name="tamanho"
                            label="GG"
                        />
                    </fieldset>
                    <Botao>Adicionar à sacola</Botao>
                </form>
            </section>
        </div>
    )
}

export default ModalProduto
