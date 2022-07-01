# Aborla Webapp



# Getting started
NVM for windows: https://github.com/coreybutler/nvm-windows

NVM for Linux/Mac: https://github.com/nvm-sh/nvm

1. Install NVM - Only required 1st time setup

```sh
nvm install 16.11.1
nvm use 16.11.1
```

2. Install Angular CLI - Only required 1st time setup
```sh
npm install -g @angular/cli
```

3. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

4. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm start
 ```

# Project structure

```
dist/                        web app production build
docs/                        project docs and coding guides
cypress/                     end-to-end tests (Cypress)
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- setup-jest.ts             unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
`npm start`                     | Run development server on `http://localhost:4200/`
`npm run serve:sw`              | Run test server on `http://localhost:4200/` with service worker enabled
`npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
`npm test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`npm run test:ci`               | Lint code and run unit tests once for continuous integration
`npm run e2e`                   | Run e2e tests using [Cypress](https://www.cypress.io/)
`npm run lint`                  | Lint code
`npm run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`npm run docs`                  | Display project documentation and coding guides
`npm run compodoc`              | Generates and display generates documentation from code
`npm run prettier`              | Automatically format all `.ts`, `.js` & `.scss` files

When building the application, you can specify the target configuration using the additional flag
`--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build configuration is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).

## Code formatting

All `.ts`, `.js` & `.scss` files in this project are formatted automatically using [Prettier](https://prettier.io),
and enforced via the `test:ci` script.

A pre-commit git hook has been configured on this project to automatically format staged files, using
(pretty-quick)[https://github.com/azz/pretty-quick], so you don't have to care for it.

You can also force code formatting by running the command `npm run prettier`.

# What's in the box

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Cypress](https://www.cypress.io/)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)
- Automatic Angular documentation generation using [Compodoc](https://compodoc.app)
- Automatic code formatting with [Prettier](https://prettier.io)

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
- [Moment.js](https://momentjs.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)

# Aplicação Web

## 2.1 Estrutura

A aplicação web será desenvolvida em ASP.NET e conectada aos serviços de base de dados da Google Firebase. Esta página será o ponto de acesso para dispositivos &#39;desktop&#39; e portátil, sendo que será otimizada para ecrãs de grande dimensão, para dispositivos móveis teremos uma aplicação dedicada para melhor desempenho e experiência dos utilizadores.

### 2.1.1 Páginas

Todas as páginas terão um cabeçalho e rodapé estáticos:

#### Cabeçalho

Logótipo da empresa no canto superior esquerdo e menu de acesso a páginas no lado direito. Também no canto superior do lado direito terá um menu dropdown de opções para gerir o espaço do cliente.

##### Menu superior

Será composto por: Inicio, Adicionar Artigos

##### Opções Dropdown

- Utilizador com sessão iniciada
  - Minha Conta - Aceder à página de perfil do utilizador
  - Logout - sai da aplicação
- Utilizador sem sessão iniciada
  - Login - Acede ao formulário de início de sessão
  - Registo - Acede ao formulário de registo

#### Rodapé

Mostrará uma secção com _links_ sobre e como contactar a empresa, também como _links_ para as redes sociais.

#### Login

O Login será uma página individual onde todos os utilizadores incluindo administração poderão iniciar a sessão. Para efetuar o início de sessão será necessário o endereço eletrónico de registo e uma palavra passe escolhida pelo utilizador. Após o início de sessão o utilizador será redirecionado para a página principal (Feed).

![](RackMultipart20220521-1-3c31ik_html_e923a18014867f90.png)

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Email |
- input do tipo email
- validação para email
 | sim |
| Password |
- input tipo password
- mascara de input para não ser visível o que o utilizador escreve
 | sim |

#### Registo

O registo será livre para qualquer utilizador sendo que terá uma página dedicada ao registo. Este será composto por uma página individual com opções de registo:

![](RackMultipart20220521-1-3c31ik_html_70173b68bd43955f.png)

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Nome |
 | Sim |
| Email | validação de email | Sim |
| Localização | opção dropdown com lista e pesquisa de freguesias/cidades | Sim |
| Contacto | número de telefone ou móvel - prefixo | Sim |
| Data de Nascimento | o utilizador terá de ter uma idade superior a 18 anos | Sim |

#### Inicio

Nesta página serão demonstrados os produtos em destaque, no centro superior da página terá uma barra de pesquisa. Do lado direito terá uma secção de filtros para auxílio à pesquisa. Na secção central terá uma lista &quot;_scroll_ infinito&quot; de produtos.

Esta página não requer que o utilizador esteja com a sessão iniciada, sendo que as opções de adicionar, e minha conta não serão visíveis.

##### Pesquisa

A barra de pesquisa contará com um _input_ para pesquisa por texto e filtros de tipo de anúncio.

![](RackMultipart20220521-1-3c31ik_html_6de616142d0ce02.png)

##### Barra de Filtros lateral

Esta irá disponibilizar opções de filtros de auxílio à pesquisa, como categorias (e.g. Serviços, Materiais de construção, eletrodomésticos), localização (por cidade/freguesia), tipo de pedido (troca, doação ou pedido).

![](RackMultipart20220521-1-3c31ik_html_878ddea05feaa078.png)

##### Adicionar Artigo

Esta opção abrirá uma modal em que o utilizador terá a opção de adicionar entre 1 a 3 fotos do artigo, terá também de identificar a categoria, localização e tipo de pedido.

![](RackMultipart20220521-1-3c31ik_html_329ca580830dd8c5.png)

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Nome do Produto |
- _input_ de uma linha
- máximo 24 caracteres
 | Sim |
| Upload de imagens |
- Máximo 3 ficheiros de imagem
- Formato dos ficheiros .jpg, .png, .bmp
- opção de selecionar uma das imagens como destaque (lista de produtos)
 | Sim |
| Descrição |
- _textarea_
 | Não |
| Categoria |
- _dropdown_ com pesquisa de categorias
 | Sim |
| Localização |
- _dropdown_ com pesquisa de cidade/freguesia
 | Sim |
| Tipo de Pedido |
- _dropdown_ com 3 opções
  - Pedido
  - Troca
  - Doação
 | Sim |
| Data de expiração |
- componente de seleção de data e hora
- data e hora \&gt; data e hora atual
- 3 opções para o utilizador (3 dias, 7 dias, 15 dias)
- 7 dias por defeito
 | Sim |
|
 |
 |
 |

##### Lista de produtos

Esta lista será disponibilizada na página Inicio na secção central. Aqui serão demonstrados todos os produtos em formato de grelha e lista.

![](RackMultipart20220521-1-3c31ik_html_8443b28d37a7fdc4.png)

Cada produto será demonstrado com as seguintes informações:

| **Nome** | **Requisitos** | **Exemplo** | **Visível utilizador sem sessão iniciada** |
| --- | --- | --- | --- |
| Imagem do produto | mostra apenas 1 imagem | Fotografia de uma bicicleta | Sim |
| Título do produto |
 | BMX jante 20 | Sim |
| Tipo de pedido | Pedido, Troca ou Doação | Doação | Sim |
| Categoria |
 | Veículos | Sim |
| Localização | Freguesia, Cidade | Mafamude, Vila Nova de Gaia | Sim |
| Função de clique | abre uma nova página com informações mais detalhadas do produto | Ver secção &quot;Produto Individual&quot; | Sim |

#### Produto Individual

A partir da lista de produtos será possível aceder individualmente a cada produto com apenas um clique, para tal será criada uma página generalista para que qualquer produto seja demonstrado. Nesta página será possível ver todas as informações relativas ao produto, desde nome, informações detalhadas, tipo de pedido até mesmo informações sobre o anunciante e como o contactar.

![](RackMultipart20220521-1-3c31ik_html_1184451be3d507b.png)

| **Nome** | **Requisitos** | **Exemplo** | **Visível utilizador sem sessão iniciada** |
| --- | --- | --- | --- |
| Nome do Produto |
 | BMX jante 15 | sim |
| Categoria |
 | Veículos | sim |
| Galeria de Imagens | 3 imagens máximo | Imagem 1 - BicicletaImagem 2 - Suporte de Garrafa de ÁguaImagem 3 - Pneu e câmara de ar extras | sim |
| Descrição |
 | Ofereço bicicleta para desocupar a minha garagem, se quiser tenho 1 pneu e câmara de ar e também um suporte para garrafa de água. | sim |
| Localização |
- Mapas (Google)
- Mostra a localização aproximada do anunciante
 | Mapa Google da zona de Mafamude | sim |
| Contacto | Proveniente do registo do utilizador | numero de telemóvel do anunciante | não(apresenta mensagem a dizer que não e possível ver, tem de se registar ou iniciar sessão) |
| Nome do Anunciante | Proveniente do registo do utilizador | Jorge Gomes | sim |
| Data de expiração |
 | Expira em 5 dias | sim |

#### Minha Conta

Esta página mostrará ao utilizador todos os seus anúncios e opções para os gerir.

##### _Sidebar_ lateral esquerdo

No topo da _sidebar_ lateral terá uma breve informação sobre o utilizador com a sessão iniciada.

| **Nome** | **Requisitos** |
| --- | --- |
| Foto do Utilizador | |
| Alterar Foto | Abre o explorador de ficheiros para escolher uma nova foto |
| Nome do utilizador |
 |

Logo de seguida terá opções para gestão de anúncios:

| **Nome** | **Requisitos** |
| --- | --- |
| Os meus anúncios |
- Botão que mostrará todos os anúncios criados pelo utilizador
- opção selecionada por defeito
- Ao clicar no botão todos os anúncios criados serão visíveis na secção central
 |
| Histórico |
- Botão que mostrará todo o histórico de trocas, compras gratuitas e pedidos expirados ou concluídos.
- Ao clicar no botão todo o histórico será demonstrado na secção central da página
 |

###### Os Meus Anúncios

Aqui serão listados todos os anúncios criados pelo utilizador, apenas os que não estiverem concluídos e não estiverem expirados.

Por defeito todos os anúncios serão ordenados por categoria e data de expiração (decrescente).

Estrutura de cada anúncio da lista:

| **Nome** | **Requisitos** |
| --- | --- |
| Foto Principal do anúncio | Foto em tamanho _thumbnail_ |
| Título | O título do anúncio |
| Expiração | Data em que expira o anúncio |
| Opção de editar | Esta opção abre a modal de adicionar produto preenchida com os valores do anúncio selecionado |
| Opção de remover | Esta opção abre uma caixa de confirmação perguntando se o utilizador deseja concluir esta ação. Após removido não será possível ver mais este anúncio. |
| Categoria | Nome da categoria em que o anúncio está inserido |

###### Histórico

Nesta página será possível ver todos os pedidos, trocas e doações. No topo da secção central terá as opções anteriormente mencionadas como filtros para uma lista que será demonstrada em baixo.

**Filtros (lado esquerdo) - obrigatório 1 selecionado**

- Pedidos - A lista mostra apenas os pedidos
- Trocas - A lista mostra apenas as trocas
- Doações - A lista mostra apenas as doações - selecionado por defeito

**Filtros (lado direito) - obrigatório 1 selecionado**

- Concluídos - A lista mostra o filtro do lado direito selecionado e estiver concluído.
- Expirados - A lista mostra o filtro do lado direito selecionado e estiver expirado.

**Lista**

Dependendo dos filtros selecionados a lista irá ser alterada dinamicamente. Todos os itens da lista expirados, terão a opção de serem novamente ativos, após essa ação ser efetuada o _item_ voltará para a lista dos &#39;Meus Anúncios&#39;.

**Estrutura da Lista**

| **Nome** | **Requisitos** |
| --- | --- |
| Imagem principal do anúncio |
 |
| Titulo do anúncio |
 |
| Categoria |
 |
| Opção para ativar | Apenas disponível se o anúncio estiver expirado, no caso de estar concluído, não será possível ser ativo. |

#### Contacto

Esta página disporá de um formulário de contacto para interação entre utilizadores e administradores.

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Assunto |
 | Sim |
| Tipo | _dropdown_ com opções:
- _Feedback_
- Reportar utilizador
- Reportar fraude, spam
- Outro
 | Sim |
| Mensagem | _textarea_ minimo 5 linhas | Sim |
| Submeter | Botão para submeter no caso de todos os campos serem válidos | - |

# Use Cases

## USE CASE: Troca de artigos

Para que seja possível fazer uma troca um utilizador &quot;vendedor&quot; tem de identificar um produto com o tipo de pedido &quot;Troca&quot;. Os utilizadores poderão propor trocas por outros artigos ou propor mais do que um objeto por troca de outro.

O utilizador &quot;vendedor&quot; terá de ter o produto que deseja trocar com o tipo de pedido &quot;Troca&quot;, este será demonstrado na lista de produtos (Home) e na página de produto individual.

Na página Home aparecerá no artigo destacado que pretende fazer a troca. (TAGS)

Na página individual do produto aparecerá um botão para efetuar a troca. Após o utilizador &quot;comprador&quot; selecionar a opção aparecerá uma modal (janela por cima do produto) em que aparecerá uma barra de pesquisa e todos os artigos do utilizador &quot;comprador&quot; tem. Este poderá selecionar mais do que um artigo para efetuar a troca.

Após essa troca ser submetida esta aparecerá para o utilizador &quot;vendedor&quot; uma notificação de troca na barra de menu superior do site, no clique dessa notificação será redirecionado para &quot;Atividade&quot;.

Em Atividade o utilizador terá todos os pedidos de utilizadores para trocas, ofertas. Ao selecionar a troca em questão o utilizador verá uma modal com o produto requisitado para a troca e os correspondentes artigos ou artigos do utilizador comprador. O utilizador terá a opção de aceitar ou negar a troca.

Caso o utilizador aceite a troca estes terão um prazo de 7 dias para efetuar a mesma, após esse período a troca será cancelada. Para concluir a troca um dos utilizadores terá de confirmar que foi concluída
