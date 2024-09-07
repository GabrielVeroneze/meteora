Este projeto foi desenvolvido como parte do Challenge Front-End 7ª Edição promovido pela Alura. Durante quatro semanas, os participantes tiveram a oportunidade de praticar e expandir seus conhecimentos em desenvolvimento web, resultando na criação da Meteora, uma plataforma de e-commerce dedicada à venda de roupas atemporais e elegantes. Este README contém informações detalhadas sobre as funcionalidades, recursos e instruções para a execução da aplicação.

<hr>

## Índice

-   [Descrição](#descricao)
-   [Páginas e Componentes](#building_construction-páginas-e-componentes)
    -   [Página Home](#página-home)
-   [Funcionalidades e Recursos](#rocket-funcionalidades-e-recursos)
    -   [Navegação e Acesso](#navegação-e-acesso)
    -   [Exploração de Produtos](#exploração-de-produtos)
    -   [Busca e Filtros](#busca-e-filtros)
    -   [Exibição de Modais](#exibição-de-modais)
    -   [Validação de Formulários](#validação-de-formulários)
    -   [Interface Responsiva](#interface-responsiva)
-   [Desenvolvimento e Implementação](#toolbox-desenvolvimento-e-implementação)
    -   [Desenvolvimento com React](#desenvolvimento-com-react)
    -   [Tipagem com TypeScript](#tipagem-com-typescript)
    -   [Roteamento com React Router](#roteamento-com-react-router)
    -   [Gerenciamento de Estado com Context API](#gerenciamento-de-estado-com-context-api)
    -   [Manipulação de Formulários com React Hook Form](#manipulação-de-formulários-com-react-hook-form)
    -   [Validação de Dados com Zod](#validação-de-dados-com-zod)
    -   [Comunicação com API via Axios](#comunicação-com-api-via-axios)
    -   [Estilização com Sass](#estilização-com-sass)
    -   [Construção de Layout](#construção-de-layout)
    -   [Utilização de Pacotes](#utilização-de-pacotes)
-   [Ferramentas Utilizadas](#computer-ferramentas-utilizadas)
-   [Acesso ao Projeto](#open_file_folder-acesso-ao-projeto)
-   [Instruções](#clipboard-instruções)
-   [Sobre o Challenge](#trophy-sobre-o-challenge)
    -   [O que é um Challenge?](#o-que-é-um-challenge)
    -   [História do Projeto](#história-do-projeto)
    -   [Desenvolvimento Ágil com Trello](#desenvolvimento-ágil-com-trello)

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
    <img src="https://github.com/user-attachments/assets/914462e3-be8e-4c2d-95b7-21443e7406d9" />
</details>

## :rocket: Funcionalidades e Recursos

### Navegação e Acesso

-   `Links de Navegação`: Oferece acesso direto às principais páginas do site, como "Home", "Nossas lojas", "Novidades" e "Promoções", facilitando a navegação entre as seções mais importantes da plataforma.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/user-attachments/assets/c8d249b9-6d47-404c-97a0-fc6df487c501" />
    </details>

### Exploração de Produtos

-   `Carrossel de Destaques`: Apresenta um carrossel dinâmico no banner principal, destacando visualmente produtos e promoções importantes, promovendo maior visibilidade e engajamento.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/user-attachments/assets/581bd527-f6d3-42ed-b6f4-b17fced4a919" />
    </details>

-   `Visão Geral de Produtos`: Exibe produtos em formato de cartões, cada um contendo imagem, título, descrição, preço e um botão "Ver mais" que mostra detalhes completos do produto.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/user-attachments/assets/46b5fa05-b31c-4bc3-bfe6-c9b8e1bd7dbc" />
    </details>

### Busca e Filtros

-   `Pesquisa de Produtos`: Disponibiliza uma barra de pesquisa, permitindo que os usuários localizem rapidamente produtos específicos ao inserir termos relevantes.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/user-attachments/assets/3ecd838f-f039-4105-8df5-0fdfcd8a9cf7" />
    </details>

-   `Seleção de Categoria`: Permite ao usuário selecionar entre diferentes categorias e visualizar todos os produtos relacionados à categoria escolhida, facilitando a busca por produtos específicos dentro dessa categoria.

    <details>
        <summary><b>:camera: Visualizar Demonstração</b></summary>
        <br />
        <img src="https://github.com/user-attachments/assets/3a5068be-54ad-4911-a3ee-bfaea9351aab" />
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

-   `Grid Layout`: Usa Grid Layout para criar layouts complexos, controlando linhas e colunas com propriedades como `grid-template-columns`, `grid-template-rows`, `grid-column` e `grid-row`.

-   `Flexbox`: Usa Flexbox para criar layouts flexíveis e responsivos, ajustando a distribuição e o comportamento dos elementos com propriedades como `flex`, `flex-direction`, e `flex-wrap`.

-   `Alinhamento e Posicionamento`: Alinha e posiciona itens dentro de contêineres usando propriedades como `align-items`, `align-self`, `justify-content`, `justify-self`, `place-content` e `place-self`.

-   `Espaçamento`: Define o espaçamento entre itens em layouts Grid e Flexbox com propriedades como `gap` e `column-gap`, garantindo que os elementos fiquem bem distribuídos.

-   `Media Queries`: Usa `@media` para aplicar estilos específicos dependendo do tamanho da tela, garantindo uma boa experiência em diferentes dispositivos.

### Utilização de Pacotes

-   `Swiper`: Usa Swiper para criar carrosséis de slides e galerias de imagens, com funções como navegação por setas, paginação e autoplay, tornando as apresentações mais dinâmicas e interativas.

-   `Json Server`: Usa Json Server para simular uma API RESTful localmente, permitindo testar e desenvolver funcionalidades rapidamente, sem precisar de um backend real.

## :computer: Ferramentas Utilizadas

| React | TypeScript | Sass | React Router | Axios | React Hook Form | Zod | Vite | 
| :---: | :--------: | :--: | :----------: | :---: | :-------------: | :-: | :--: |
<img height="65px" src="https://github.com/user-attachments/assets/81663c62-99c8-4e60-9099-f60a6ca8c01d"> | <img height="65px" src="https://github.com/user-attachments/assets/81a3adda-b1e0-46ab-ac6d-19cc596a2302"> | <img height="55px" src="https://github.com/user-attachments/assets/e3afa6d2-d1ff-4514-be2e-7852b91502be"> | <img height="50px" src="https://github.com/user-attachments/assets/daaa49e3-f06c-4ca7-a924-da3f95c448bb"> | <img height="65px" src="https://github.com/user-attachments/assets/31076e79-3359-4f4c-b486-4346c9a1aa0b"> | <img height="65px" src="https://github.com/user-attachments/assets/3bd7f73c-900a-4044-b141-e4e41a71ea4f"> | <img height="65px" src="https://github.com/user-attachments/assets/ec06087e-cf52-4a3d-9389-9580574a1046"> | <img height="65px" src="https://github.com/user-attachments/assets/8917d6d9-9506-4edb-9631-e16b161af8d4">

## :open_file_folder: Acesso ao Projeto

Você pode baixar o projeto diretamente:

[Baixar código fonte](https://github.com/GabrielVeroneze/meteora/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:

```
git clone https://github.com/GabrielVeroneze/meteora.git
```

## :clipboard: Instruções

Para configurar e executar este projeto localmente, você precisará seguir estas etapas:

1. Certifique-se de que o Node.js está instalado em seu computador. Caso não esteja, faça o download e a instalação através do site oficial:

    https://nodejs.org/

2. Abra o terminal e navegue até a pasta raiz do projeto utilizando o comando `cd`. Por exemplo:

    ```
    cd meteora
    ```

3. Antes de iniciar a aplicação, instale todas as dependências necessárias executando o seguinte comando:

    ```
    npm install
    ```

    Este comando instalará todas as dependências listadas no arquivo `package.json`.

4. Após a instalação das dependências, inicie o JSON Server para disponibilizar os dados da API, executando o comando:

    ```
    npx json-server --watch mock/db.json
    ```

    Isso iniciará o JSON Server na porta 3000 usando o arquivo `db.json` como banco de dados.

5. Após a inicialização do JSON Server, inicie o servidor de desenvolvimento executando o seguinte comando:

    ```
    npm run dev
    ```

    Você receberá uma mensagem com a URL de execução da aplicação, geralmente em http://localhost:5173.

## :trophy: Sobre o Challenge

A 7ª Edição do Challenge Front-End proporciona uma experiência prática e desafiadora, permitindo que os participantes apliquem seus conhecimentos em um projeto completo do início ao fim.

### O que é um Challenge?

O Challenge Front-End é uma abordagem baseada em desafios, onde os participantes se envolvem com um problema específico e exploram soluções por meio de cursos, conteúdos, interações e seus próprios conhecimentos. É uma simulação de um desafio real do mundo profissional, incentivando a aplicação prática e criativa das habilidades dos participantes.

### História do Projeto

A empresa Meteora, especializada em moda, decidiu expandir sua presença digital através de um e-commerce de roupas. O objetivo é criar uma plataforma que ofereça uma experiência de compra intuitiva e envolvente, permitindo que os clientes explorem e adquiram produtos com facilidade.

Para isso, o site deve oferecer uma página inicial com buscador, carrossel, galerias de produtos, modal de informações detalhadas, cadastro na newsletter e rodapé informativo, garantindo uma experiência de compra fluida e acessível.

### Desenvolvimento Ágil com Trello

Durante o período de quatro semanas, o projeto foi desenvolvido seguindo uma metodologia ágil, utilizando o Trello para gerenciar as tarefas desde o início até a conclusão do projeto.

Durante cada semana, foram definidas metas específicas para orientar o trabalho em diversas áreas do projeto. A seguir, estão as principais tarefas de cada semana:

#### Semana 1

-   Implementação do cabeçalho com suporte à responsividade.

-   Desenvolvimento do banner principal.

-   Criação das seções de categorias, facilidades e produtos.

-   Adaptação das seções criadas para garantir a responsividade.

#### Semana 2

-   Implementação da seção de inscrição na newsletter.

-   Desenvolvimento do rodapé.

-   Criação e ajuste do carrossel.

-   Desenvolvimento dos modais de produtos e da newsletter.

-   Ajuste da responsividade dos modais.

#### Semanas 3 & 4

-   Integração com a API para listagem dinâmica de produtos na galeria.

-   Implementação de filtros de produtos por categoria.

-   Desenvolvimento da funcionalidade de busca por produtos.

-   Implementação das funcionalidades para abertura e fechamento de modais.

-   Validação dos dados no formulário de inscrição da newsletter.
