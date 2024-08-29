<h1 align="center" id="descricao"><img width="250px" src="https://github.com/user-attachments/assets/8e7c44e5-7ece-4821-a625-98fb1be5b6ec"></h1>

<p align="center">A Meteora é uma plataforma de e-commerce especializada em roupas atemporais, casuais e elegantes. Acreditando que a moda vai além das tendências passageiras, a Meteora oferece peças versáteis que se adaptam a diferentes estilos e ocasiões.</p>

<p align="center">A plataforma oferece aos clientes uma experiência de compra intuitiva e otimizada. Ela inclui um sistema de busca avançada, galerias de produtos organizadas por categorias, e banners interativos sobre as coleções em destaque.</p>

<p align="center">Cada produto disponível é apresentado com todos os detalhes necessários, incluindo imagens, nomes, descrições e opções de compra, tudo pensado para facilitar a navegação e a escolha dos clientes.</p>

## :building_construction: Páginas e Componentes

### Página Home

A Página Home é o ponto de entrada da plataforma, onde os usuários podem explorar os produtos oferecidos. Nesta página, estão disponíveis um carrossel de imagens, uma lista das categorias de produtos, uma galeria de produtos em destaque, uma seção que destaca as facilidades da loja, e uma área para cadastro na newsletter.

<details>
    <summary><b>:camera: Visualizar Screenshot</b></summary>
    <br />
    <img src="" />
</details>

## :rocket: Funcionalidades e Recursos

### Navegação e Acesso

-   `Links de Navegação`: Oferece acesso direto às principais páginas do site, como "Home", "Nossas lojas", "Novidades" e "Promoções", facilitando a navegação entre as seções mais importantes da plataforma.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Exploração de Produtos

-   `Carrossel de Destaques`: Apresenta um carrossel dinâmico no banner principal, destacando visualmente produtos e promoções importantes, promovendo maior visibilidade e engajamento.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

-   `Visão Geral de Produtos`: Exibe produtos em formato de cartões, cada um contendo imagem, título, descrição, preço e um botão "Ver mais" que mostra detalhes completos do produto.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Busca e Filtros

-   `Pesquisa de Produtos`: Disponibiliza uma barra de pesquisa, permitindo que os usuários localizem rapidamente produtos específicos ao inserir termos relevantes.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

-   `Seleção de Categoria`: Permite ao usuário selecionar entre diferentes categorias e visualizar todos os produtos relacionados à categoria escolhida, facilitando a busca por produtos específicos dentro dessa categoria.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Exibição de Modais

-   `Detalhes do Produto`: Ao clicar em "Ver mais", um modal é aberto exibindo detalhes completos do produto, incluindo imagem, nome, descrição, preço, informações do vendedor, opções de cor e tamanho, e um botão "Adicionar à sacola".

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

-   `Notificação de Inscrição`: Após o cadastro na newsletter, um modal é exibido confirmando o sucesso da operação, incluindo um cabeçalho de confirmação e informações sobre as próximas novidades.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

-   `Controle de Modais`: Ambos os modais (produto e newsletter) possuem a funcionalidade de abrir ao clicar no item correspondente e fechar ao clicar no ícone de "X", proporcionando uma interação intuitiva.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Validação de Formulários

-   `Validação de Cadastro`: Durante o cadastro, o campo de e-mail é validado para garantir que não esteja vazio e que o formato seja correto. Se o e-mail for inválido, uma mensagem de erro é exibida para orientar o usuário na correção.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

### Interface Responsiva

-   `Layout Responsivo`: Adapta automaticamente o design da interface para se ajustar a diferentes tamanhos de tela, garantindo uma experiência consistente e otimizada em dispositivos móveis, tablets e desktops.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="" />
    </details>

## :toolbox: Desenvolvimento e Implementação

### Desenvolvimento com React

-   `Componentes Funcionais e JSX`: Usa componentes funcionais e JSX para montar a interface, mantendo o código organizado e fácil de entender com a sintaxe do React.

-   `Hooks e Hooks Customizados`: Utiliza hooks como `useState`, `useEffect` e `useRef` para gerenciar estados e efeitos, e cria hooks customizados para reaproveitar lógica em diferentes partes da aplicação.

-   `Renderização`: Aplica renderização condicional e de listas para mostrar elementos conforme o estado atual da aplicação, tornando a interface mais dinâmica.

-   `Manipulação de Eventos`: Integra eventos como `onChange`, `onClick` e `onSubmit` para captar interações dos usuários, deixando a aplicação mais interativa.

-   `Referências e Manipulação de Elementos`: Usa `ref` para manipular diretamente elementos do DOM, como abrir e fechar modais, garantindo um controle preciso sobre a interface.

-   `Manipulação de URL e Query Params`: Trabalha com URLs e parâmetros de consulta usando `URLSearchParams`, permitindo ajustar a experiência do usuário com base nas informações da URL.

### Tipagem com TypeScript

-   `Definições de Tipos`: Usa interfaces e aliases de tipo, como `Produto` e `Categoria`, para definir como os dados devem ser estruturados e garantir que o código esteja correto.

-   `Tipagem Básica`: Usa tipos simples como `boolean`, `null`, `number` e `string` para garantir que variáveis e funções recebam os tipos de dados certos.

-   `Tipos de Objetos e Arrays`: Define a estrutura de dados mais complexos com tipos de objetos e arrays, para garantir que eles sejam manipulados corretamente.

-   `Parâmetros Opcionais e Tipos de União`: Usa parâmetros opcionais e tipos de união para lidar com dados que podem ou não existir, oferecendo mais flexibilidade na manipulação dos tipos.

-   `Operadores de Tipo`: Usa operadores como a asserção não nula (`!`) e o encadeamento opcional (`?.`) para acessar propriedades de dados que podem não existir, evitando erros.

-   `Herança e Extensões`: Usa herança com `extends` para criar novos tipos baseados em tipos existentes, permitindo reutilizar e adicionar funcionalidades de forma mais eficiente.

### Roteamento com React Router

-   `Configuração de Rotas`: Configura rotas na aplicação com `BrowserRouter`, `Routes` e `Route`, permitindo a navegação entre diferentes páginas e componentes.

-   `Rotas Aninhadas`: Implementa rotas aninhadas para estruturar a navegação de maneira hierárquica e organizada.

-   `Parâmetros de Rotas`: Define parâmetros de URL com `:parameter` e utiliza o hook `useParams` para acessar e manipular esses parâmetros.

-   `Links e Navegação`: Utiliza os componentes `Link` e `NavLink` para criar uma navegação suave e intuitiva entre as páginas.

-   `Navegação Programática`: Usa o hook `useNavigate` para realizar navegação programática, permitindo redirecionar o usuário com base em ações específicas.

-   `Localização e Busca`: Usa o hook `useLocation` para obter informações sobre a URL atual, como parâmetros de busca, e ajustar a navegação conforme necessário.

### Gerenciamento de Estado com Context API

-   `Criação de Contexto`: Utiliza `createContext` para criar um contexto compartilhado, permitindo que dados sejam acessados por diversos componentes na aplicação.

-   `Provedor de Contexto`: Utiliza `Context.Provider` para envolver componentes e garantir que todos os filhos tenham acesso aos dados do contexto.

-   `Hooks de Contexto`: Usa o hook `useContext` para acessar e consumir dados do contexto dentro dos componentes, simplificando o gerenciamento de estado global.

-   `Definição de DisplayName`: Atribui um nome descritivo ao contexto com `displayName`, facilitando a identificação e a depuração durante o desenvolvimento.

### Manipulação de Formulários com React Hook Form

-   `Manipulação de Formulários`: Usa `useForm`, `handleSubmit` e `register` para controlar e gerenciar formulários, tornando mais fácil lidar com a entrada e validação dos dados.

-   `Validação com formState`: Usa `formState` para acessar e mostrar erros de validação, garantindo que os dados nos formulários estejam corretos.

-   `Integração com Zod`: Usa `zodResolver` para conectar a validação de formulários com o Zod, oferecendo esquemas de validação mais avançados e personalizados.

### Validação de Dados com Zod

-   `Definição de Esquemas`: Usa `z.object`, `z.string`, `z.min` e `z.email` para criar esquemas de validação personalizados e garantir que os dados sigam os critérios estabelecidos.

-   `Mensagens de Erro`: Personaliza as mensagens de erro com o atributo `message` nos esquemas, oferecendo um feedback claro para ajudar os usuários a corrigirem os dados.

-   `Inferência de Tipos`: Usa `z.infer` para definir tipos automaticamente a partir dos esquemas de validação, garantindo a consistência dos tipos de dados com os esquemas.

### Comunicação com API via Axios

-   `Requisições HTTP`: Usa o Axios para fazer requisições HTTP (GET) e se comunicar com APIs, facilitando a troca de dados com backend.

-   `Configuração da Instância`: Cria uma instância personalizada do Axios com `axios.create`, configurando `baseURL` e `headers` para padronizar e simplificar as requisições.

-   `Parâmetros de Requisição`: Usa a propriedade `params` para adicionar parâmetros na URL das requisições, permitindo enviar dados dinâmicos para as APIs.

-   `Cabeçalhos HTTP`: Configura os cabeçalhos `Accept` e `Content-Type` para garantir que o servidor entenda o tipo de conteúdo esperado e o formato dos dados enviados.

### Estilização com Sass

-   `Variáveis`: Define variáveis para guardar valores como cores, espaçamentos e fontes, ajudando a manter o design consistente e mais fácil de ajustar.

-   `Mixins`: Cria blocos de estilos reutilizáveis com `@mixin` e usa `@include` para aplicá-los a outros estilos, além de usar `@content` para adicionar conteúdo dinâmico dentro dos mixins.

-   `Funções`: Desenvolve funções personalizadas com `@function` para calcular e retornar valores, utilizando `@return` para devolver o resultado.

-   `Modularização e Extensão`: Utiliza `@use` para importar módulos e organizar estilos, e `@extend` para compartilhar regras CSS entre seletores, evitando repetição de código.

-   `Estruturas Condicionais`: Aplica estilos baseados em condições específicas utilizando `@if` e `@else if`, ajustando a aparência conforme os critérios definidos.

-   `Seletores e Escopo`: Utiliza o seletor `&` para fazer referência ao pai, o seletor placeholder `%` para criar seletores extensíveis sem gerar CSS direto, e `:global` para aplicar estilos globalmente.

### Construção de Layout

-   `Grid Layout`: Utiliza o Grid Layout para a criação de layouts complexos com mais controle sobre linhas e colunas. Com propriedades como grid, grid-template-columns, grid-template-rows, grid-column e grid-row.

-   `Flexbox`: Utiliza Flexbox que facilita a criação de layouts flexíveis e responsivos. Utilizando propriedades como flex, flex-direction e flex-wrap.

-   `Alinhamento e Posicionamento`: Para alinhar e posicionar itens dentro de contêineres, é utilizado várias propriedades, como align-items, align-self, justify-content, justify-self, place-content e place-self.

-   `Espaçamento`: Define o espaçamento entre itens em layouts Grid e Flexbox utilizando propriedades como gap e column-gap.

-   `Media Queries`: Aplica @media para definir estilos específicos com base no tamanho da tela, garantindo uma experiência de usuário consistente e otimizada em diferentes dispositivos.

### Utilização de Pacotes

-   `Swiper`: Usa o swiper para criar carrosséis de slides e galerias de imagens. Utiliza recursos como navegação por setas, paginação e autoplay, para a criação de apresentações visuais interativas e envolventes.

-   `Json Server`: Usa json-server para simular uma API RESTful localmente durante o desenvolvimento, permitindo o teste de funcionalidades sem a necessidade de um backend real.
