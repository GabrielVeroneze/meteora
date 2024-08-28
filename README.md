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

-   `Componentes Funcionais e JSX`: Utiliza componentes funcionais e JSX para criar a interface de usuário de forma clara e organizada, aproveitando a sintaxe simples e intuitiva do React.

-   `Hooks e Gerenciamento de Estado`: Emprega hooks como useState, useEffect e useRef para controlar o estado e os efeitos nos componentes, permitindo uma fácil gestão do comportamento dinâmico da aplicação.

-   `Hooks Customizados`: Cria hooks personalizados para reutilizar lógica comum entre componentes, facilitando a manutenção e o compartilhamento de funcionalidades.

-   `Manipulação de Eventos`: Implementa eventos como onChange, onClick e onSubmit para capturar e reagir às ações do usuário, tornando a interface interativa e responsiva.

-   `Renderização`: Utiliza técnicas como renderização condicional e de listas para exibir elementos dinamicamente, adaptando a interface conforme o estado da aplicação.

-   `Referências e Manipulação de Elementos`: Usa ref para acessar e manipular diretamente elementos do DOM, como abrir e fechar modais de forma precisa.

-   `Funções Utilitárias`: Desenvolve funções utilitárias para simplificar tarefas repetitivas e otimizar a lógica do código, promovendo a eficiência e a clareza.

-   `Manipulação de URL e Query Params`: Manipula URLs e parâmetros de consulta com ferramentas como new URLSearchParams() para extrair e usar informações da URL, personalizando a experiência do usuário.

-   `Elementos e Tags`: Utiliza tags semânticas e específicas, como <dialog>, para organizar a interface e melhorar a acessibilidade da aplicação.

-   `Componentização`: Adota a criação de componentes independentes e reutilizáveis que encapsulam a lógica e a renderização, facilitando a manutenção e a escalabilidade da aplicação.

-   `Operações Assíncronas`: Faz uso de .then para lidar com operações assíncronas, como requisições de dados e atualizações de estado, garantindo uma resposta eficiente e fluida da aplicação.

### Tipagem com TypeScript

-   `Definições de Tipos`: Define estruturas e tipos de dados com interfaces e type aliases, como Produto e Categoria, para garantir a integridade e segurança do código.

-   `Interfaces Globais`: Utiliza interfaces globais para assegurar contratos de tipos consistentes em toda a aplicação, facilitando a integração e manutenção do código.

-   `Tipagem Básica`: Usa tipos básicos como boolean, null, number, e string para representar dados simples, assegurando que as variáveis e funções sejam usadas com os tipos de dados corretos.

-   `Operadores de Tipo`: Aplica operadores como o operador de asserção não nula (!) e Optional Chaining (?) para evitar erros em dados opcionais e acessar propriedades de forma segura.

-   `Inferência de Tipos`: Aproveita a inferência de tipos do TypeScript para deduzir tipos automaticamente, simplificando a definição e a legibilidade do código.

-   `Tipos de Objetos e Arrays`: Utiliza tipos de objetos e arrays para estruturar dados complexos. Tipos de objetos permitem definir a forma de objetos, enquanto tipos de arrays garantem que as coleções de dados sejam manipuladas corretamente.

-   `Herança e Extensões`: Utiliza o conceito de herança com extends para criar tipos derivados e estender funcionalidades, permitindo a criação de tipos mais complexos e a reutilização de estruturas existentes.

-   `Parâmetros Opcionais e Tipos de União`: Utiliza parâmetros opcionais e tipos de união, para parâmetros que podem ou não ser fornecido e controlar e manipular tipos de dados de maneira mais flexível.

-   `Assinaturas e Expressões`: Define assinaturas de índice para tornar os tipos mais flexíveis e expressivos, permitindo a definição de objetos com chaves dinâmicas. Expressões de tipos de função ajudam a definir e restringir a assinatura de funções.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza BrowserRouter, Routes, e Route para configurar e gerenciar rotas na aplicação, permitindo a navegação entre diferentes páginas e componentes.

-   `Rotas Aninhadas`: Implementa rotas aninhadas para organizar a estrutura de navegação.

-   `Links e Navegação`: Usa os componentes Link e NavLink para facilitar a navegação entre páginas, oferecendo uma experiência de usuário fluida.

-   `Navegação Programática`: Utiliza o hook useNavigate para realizar navegação programática, permitindo transições entre páginas com base em ações específicas.

-   `Localização e Busca`: Emprega o hook useLocation para acessar informações sobre a localização atual, como o search, para personalizar a navegação.

-   `Parâmetros de Rotas`: Define parâmetros com :parameter, e utiliza o hook useParams para acessar o parâmetro na URL atual.

### Gerenciamento de Estado com Context API

-   `Criação de Contexto`: O createContext é usado para inicializar o contexto, estabelecendo um espaço compartilhado para dados que podem ser acessados por múltiplos componentes.

-   `Provedor de Contexto`: Utiliza Context.Provider para envolver componentes que precisam acessar os dados do contexto, garantindo que as informações estejam disponíveis em toda a árvore de componentes.

-   `Hooks de Contexto`: Implementa o hook useContext para consumir e acessar os dados do contexto dentro dos componentes, facilitando o gerenciamento de estado global.

-   `Definição de DisplayName`: Define um nome descritivo para o contexto com displayName, ajudando na identificação e depuração dos contextos criados.

### Manipulação de Formulários com React Hook Form

-   `Manipulação de Formulários`: Utiliza useForm, handleSubmit, e register para gerenciar a interação e o estado dos formulários, facilitando o controle e a validação dos dados.

-   `Validação com formState`: Usa formState para acessar e exibir erros de validação, garantindo que os dados inseridos nos formulários estejam corretos.

-   `Integração com Zod`: Usa zodResolver para integrar a validação de formulários com Zod, assegurando esquemas de validação robustos e personalizados.

### Validação de Dados com Zod

-   `Definição de Esquemas`: Utiliza z.object, z.string, z.min e z.email, para definir esquemas de validação robustos e personalizados, garantindo a integridade dos dados.

-   `Mensagens de Erro`: Personaliza mensagens de erro com o atributo message em esquemas Zod, oferecendo feedback claro e útil aos usuários.

-   `Inferência de Tipos`: Usa z.infer para inferir automaticamente tipos a partir dos esquemas de validação, assegurando consistência entre dados e validações.

### Comunicação com API via Axios

-   `Requisições HTTP`: Utiliza Axios para realizar requisições HTTP (get) para interagir com APIs RESTful, facilitando a comunicação com o backend.

-   `Configuração da Instância`: Cria uma instância personalizada do Axios com axios.create, configurando globalmente baseURL e headers, para simplificar a gestão das requisições.

-   `Cabeçalhos HTTP`: Utiliza cabeçalhos como Accept para indicar o tipo de conteúdo esperado na resposta e Content-Type para especificar o formato dos dados enviados.

-   `Parâmetros de Requisição`: Utiliza a propriedade params para adicionar parâmetros à URL da requisição, facilitando a comunicação com APIs e o envio de dados dinâmicos em cada requisição.

### Estilização com Sass

-   `Estilização Modular com Sass`: Utiliza Sass para criar estilos modulares e reutilizáveis, aproveitando variáveis, mixins e funções para manter a consistência e a organização do CSS.

-   `Variáveis`: Define variáveis para a criação de valores reutilizáveis como cores, espaçamentos, fontes e outros estilos, facilitando a manutenção e a consistência do design.

-   `Mixins`: Cria blocos reutilizáveis de estilos com @mixin, esses blocos são inclusos em outros estilos com @include. Também, utiliza @content para a inserção de conteúdo dinâmico em mixins.

-   `CSS Modules`: Aplica CSS Modules para escopar estilos aos componentes específicos, evitando conflitos e garantindo uma abordagem modular na estilização.

### Construção de Layout

-   `Flexbox e CSS Grid`: Utiliza Flexbox e CSS Grid para criar layouts responsivos e dinâmicos, adaptando a interface da aplicação a diferentes tamanhos de tela e dispositivos.

-   `Media Queries`: Aplica @media para definir estilos específicos com base no tamanho da tela, garantindo uma experiência de usuário consistente e otimizada em diferentes dispositivos.

### Utilização de Pacotes

-   `Json Server`: Usa json-server para simular uma API RESTful localmente durante o desenvolvimento, permitindo o teste de funcionalidades sem a necessidade de um backend real.
