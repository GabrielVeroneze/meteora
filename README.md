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

-   `Componentes Funcionais e JSX`: Utiliza componentes funcionais e JSX para criar a interface do usuário de forma declarativa e modular. A combinação de componentes funcionais e JSX permite uma criação intuitiva e reutilizável da UI.

-   `Hooks e Hooks Customizados`: Emprega hooks como useState, useEffect, e useNavigate para gerenciar estado e efeitos colaterais. Hooks customizados, como usePesquisarPorProdutos, são criados para encapsular lógicas específicas e reutilizáveis, promovendo a reusabilidade e organização do código.

-   `Componentização`: Adota a criação de componentes independentes e reutilizáveis que encapsulam a lógica e a renderização, facilitando a manutenção e a escalabilidade da aplicação.

-   `Renderização Condicional e Dinâmica`: Implementa renderização condicional e mapeamento de listas para exibir conteúdo de forma adaptativa com base em condições e dados externos, como listas de produtos e filtros dinâmicos.

-   `Eventos`: Utiliza eventos como onClick, onSubmit, e outros para interagir com a interface do usuário e responder a ações, proporcionando uma experiência interativa e responsiva.

-   `Operações Assíncronas`: Faz uso de .then para lidar com operações assíncronas, como requisições de dados e atualizações de estado, garantindo uma resposta eficiente e fluida da aplicação.

### Tipagem com TypeScript

-   `Definições de Tipos`: Define estruturas e tipos de dados com interfaces e type aliases, como Produto e Categoria, para garantir a integridade e segurança do código.

-   `Interfaces Globais`: Utiliza interfaces globais para assegurar contratos de tipos consistentes em toda a aplicação, facilitando a integração e manutenção do código.

-   `Basic Types`: Usa tipos básicos (string, number, boolean) para representar dados simples e assegurar a integridade dos dados em diferentes partes da aplicação.

-   `Operadores de Tipo`: Aplica Optional Chaining ? e Non-null Assertion Operator ! para acessar propriedades de forma segura e evitar erros em dados opcionais.

-   `Inferência de Tipos`: Aproveita a inferência de tipos do TypeScript para deduzir tipos automaticamente, simplificando a definição e a legibilidade do código.

### Roteamento com React Router

-   `Configuração de Rotas`: Utiliza BrowserRouter, Routes, e Route para configurar e gerenciar rotas na aplicação, permitindo a navegação entre diferentes páginas e componentes.

-   `Rotas Aninhadas`: Implementa rotas aninhadas para organizar a estrutura de navegação.

-   `Navegação`: Usa os componentes Link e NavLink para facilitar a navegação entre páginas, oferecendo uma experiência de usuário fluida.

-   `Navegação Programática`: Utiliza o hook useNavigate para realizar navegação programática, permitindo transições entre páginas com base em ações específicas.

-   `Acesso à Localização`: Emprega o hook useLocation para acessar informações sobre a localização atual, como o pathname e o search, para personalizar a navegação.

### Gerenciamento de Estado com Context API

-   `Criação de Contexto`: Cria contextos com createContext para compartilhar dados e estados entre componentes sem a necessidade de prop drilling.

-   `Provedor de Contexto`: Utiliza Context.Provider para fornecer o contexto criado a todos os componentes descendentes, garantindo acesso consistente aos dados.

-   `Hooks de Contexto`: Implementa useContext para consumir e acessar os dados do contexto dentro dos componentes, facilitando o gerenciamento de estado global.

-   `Definição de DisplayName`: Define um nome descritivo para o contexto com displayName, ajudando na identificação e depuração dos contextos criados.

### Manipulação de Formulários com React Hook Form

-   `Manipulação de Formulários`: Utiliza useForm, handleSubmit, e register para gerenciar a interação e o estado dos formulários, facilitando o controle e a validação dos dados.

-   `Validação com formState`: Usa formState para gerenciar e exibir erros de validação, garantindo que os dados inseridos nos formulários estejam corretos.

-   `Integração com Zod`: Usa zodResolver para integrar a validação de formulários com Zod, assegurando esquemas de validação robustos e personalizados.

### Validação de Dados com Zod

-   `Validações`: Utiliza z.object, z.string, z.min e z.email, para definir esquemas de validação robustos e personalizados, garantindo a integridade dos dados.

-   `Mensagens de Erro`: Personaliza mensagens de erro com o atributo message em esquemas Zod, oferecendo feedback claro e útil aos usuários.

-   `Inferência de Tipos`: Usa z.infer para inferir automaticamente tipos a partir dos esquemas de validação, assegurando consistência entre dados e validações.

