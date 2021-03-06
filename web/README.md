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

# Aplica????o Web

## 2.1 Estrutura

A aplica????o web ser?? desenvolvida em ASP.NET e conectada aos servi??os de base de dados da Google Firebase. Esta p??gina ser?? o ponto de acesso para dispositivos &#39;desktop&#39; e port??til, sendo que ser?? otimizada para ecr??s de grande dimens??o, para dispositivos m??veis teremos uma aplica????o dedicada para melhor desempenho e experi??ncia dos utilizadores.

### 2.1.1 P??ginas

Todas as p??ginas ter??o um cabe??alho e rodap?? est??ticos:

#### Cabe??alho

Log??tipo da empresa no canto superior esquerdo e menu de acesso a p??ginas no lado direito. Tamb??m no canto superior do lado direito ter?? um menu dropdown de op????es para gerir o espa??o do cliente.

##### Menu superior

Ser?? composto por: Inicio, Adicionar Artigos

##### Op????es Dropdown

- Utilizador com sess??o iniciada
  - Minha Conta - Aceder ?? p??gina de perfil do utilizador
  - Logout - sai da aplica????o
- Utilizador sem sess??o iniciada
  - Login - Acede ao formul??rio de in??cio de sess??o
  - Registo - Acede ao formul??rio de registo

#### Rodap??

Mostrar?? uma sec????o com _links_ sobre e como contactar a empresa, tamb??m como _links_ para as redes sociais.

#### Login

O Login ser?? uma p??gina individual onde todos os utilizadores incluindo administra????o poder??o iniciar a sess??o. Para efetuar o in??cio de sess??o ser?? necess??rio o endere??o eletr??nico de registo e uma palavra passe escolhida pelo utilizador. Ap??s o in??cio de sess??o o utilizador ser?? redirecionado para a p??gina principal (Feed).

![](RackMultipart20220521-1-3c31ik_html_e923a18014867f90.png)

| **Nome** | **Requisitos** | **Obrigat??rio** |
| --- | --- | --- |
| Email |
- input do tipo email
- valida????o para email
 | sim |
| Password |
- input tipo password
- mascara de input para n??o ser vis??vel o que o utilizador escreve
 | sim |

#### Registo

O registo ser?? livre para qualquer utilizador sendo que ter?? uma p??gina dedicada ao registo. Este ser?? composto por uma p??gina individual com op????es de registo:

![](RackMultipart20220521-1-3c31ik_html_70173b68bd43955f.png)

| **Nome** | **Requisitos** | **Obrigat??rio** |
| --- | --- | --- |
| Nome |
 | Sim |
| Email | valida????o de email | Sim |
| Localiza????o | op????o dropdown com lista e pesquisa de freguesias/cidades | Sim |
| Contacto | n??mero de telefone ou m??vel - prefixo | Sim |
| Data de Nascimento | o utilizador ter?? de ter uma idade superior a 18 anos | Sim |

#### Inicio

Nesta p??gina ser??o demonstrados os produtos em destaque, no centro superior da p??gina ter?? uma barra de pesquisa. Do lado direito ter?? uma sec????o de filtros para aux??lio ?? pesquisa. Na sec????o central ter?? uma lista &quot;_scroll_ infinito&quot; de produtos.

Esta p??gina n??o requer que o utilizador esteja com a sess??o iniciada, sendo que as op????es de adicionar, e minha conta n??o ser??o vis??veis.

##### Pesquisa

A barra de pesquisa contar?? com um _input_ para pesquisa por texto e filtros de tipo de an??ncio.

![](RackMultipart20220521-1-3c31ik_html_6de616142d0ce02.png)

##### Barra de Filtros lateral

Esta ir?? disponibilizar op????es de filtros de aux??lio ?? pesquisa, como categorias (e.g. Servi??os, Materiais de constru????o, eletrodom??sticos), localiza????o (por cidade/freguesia), tipo de pedido (troca, doa????o ou pedido).

![](RackMultipart20220521-1-3c31ik_html_878ddea05feaa078.png)

##### Adicionar Artigo

Esta op????o abrir?? uma modal em que o utilizador ter?? a op????o de adicionar entre 1 a 3 fotos do artigo, ter?? tamb??m de identificar a categoria, localiza????o e tipo de pedido.

![](RackMultipart20220521-1-3c31ik_html_329ca580830dd8c5.png)

| **Nome** | **Requisitos** | **Obrigat??rio** |
| --- | --- | --- |
| Nome do Produto |
- _input_ de uma linha
- m??ximo 24 caracteres
 | Sim |
| Upload de imagens |
- M??ximo 3 ficheiros de imagem
- Formato dos ficheiros .jpg, .png, .bmp
- op????o de selecionar uma das imagens como destaque (lista de produtos)
 | Sim |
| Descri????o |
- _textarea_
 | N??o |
| Categoria |
- _dropdown_ com pesquisa de categorias
 | Sim |
| Localiza????o |
- _dropdown_ com pesquisa de cidade/freguesia
 | Sim |
| Tipo de Pedido |
- _dropdown_ com 3 op????es
  - Pedido
  - Troca
  - Doa????o
 | Sim |
| Data de expira????o |
- componente de sele????o de data e hora
- data e hora \&gt; data e hora atual
- 3 op????es para o utilizador (3 dias, 7 dias, 15 dias)
- 7 dias por defeito
 | Sim |
|
 |
 |
 |

##### Lista de produtos

Esta lista ser?? disponibilizada na p??gina Inicio na sec????o central. Aqui ser??o demonstrados todos os produtos em formato de grelha e lista.

![](RackMultipart20220521-1-3c31ik_html_8443b28d37a7fdc4.png)

Cada produto ser?? demonstrado com as seguintes informa????es:

| **Nome** | **Requisitos** | **Exemplo** | **Vis??vel utilizador sem sess??o iniciada** |
| --- | --- | --- | --- |
| Imagem do produto | mostra apenas 1 imagem | Fotografia de uma bicicleta | Sim |
| T??tulo do produto |
 | BMX jante 20 | Sim |
| Tipo de pedido | Pedido, Troca ou Doa????o | Doa????o | Sim |
| Categoria |
 | Ve??culos | Sim |
| Localiza????o | Freguesia, Cidade | Mafamude, Vila Nova de Gaia | Sim |
| Fun????o de clique | abre uma nova p??gina com informa????es mais detalhadas do produto | Ver sec????o &quot;Produto Individual&quot; | Sim |

#### Produto Individual

A partir da lista de produtos ser?? poss??vel aceder individualmente a cada produto com apenas um clique, para tal ser?? criada uma p??gina generalista para que qualquer produto seja demonstrado. Nesta p??gina ser?? poss??vel ver todas as informa????es relativas ao produto, desde nome, informa????es detalhadas, tipo de pedido at?? mesmo informa????es sobre o anunciante e como o contactar.

![](RackMultipart20220521-1-3c31ik_html_1184451be3d507b.png)

| **Nome** | **Requisitos** | **Exemplo** | **Vis??vel utilizador sem sess??o iniciada** |
| --- | --- | --- | --- |
| Nome do Produto |
 | BMX jante 15 | sim |
| Categoria |
 | Ve??culos | sim |
| Galeria de Imagens | 3 imagens m??ximo | Imagem 1 - BicicletaImagem 2 - Suporte de Garrafa de ??guaImagem 3 - Pneu e c??mara de ar extras | sim |
| Descri????o |
 | Ofere??o bicicleta para desocupar a minha garagem, se quiser tenho 1 pneu e c??mara de ar e tamb??m um suporte para garrafa de ??gua. | sim |
| Localiza????o |
- Mapas (Google)
- Mostra a localiza????o aproximada do anunciante
 | Mapa Google da zona de Mafamude | sim |
| Contacto | Proveniente do registo do utilizador | numero de telem??vel do anunciante | n??o(apresenta mensagem a dizer que n??o e poss??vel ver, tem de se registar ou iniciar sess??o) |
| Nome do Anunciante | Proveniente do registo do utilizador | Jorge Gomes | sim |
| Data de expira????o |
 | Expira em 5 dias | sim |

#### Minha Conta

Esta p??gina mostrar?? ao utilizador todos os seus an??ncios e op????es para os gerir.

##### _Sidebar_ lateral esquerdo

No topo da _sidebar_ lateral ter?? uma breve informa????o sobre o utilizador com a sess??o iniciada.

| **Nome** | **Requisitos** |
| --- | --- |
| Foto do Utilizador | |
| Alterar Foto | Abre o explorador de ficheiros para escolher uma nova foto |
| Nome do utilizador |
 |

Logo de seguida ter?? op????es para gest??o de an??ncios:

| **Nome** | **Requisitos** |
| --- | --- |
| Os meus an??ncios |
- Bot??o que mostrar?? todos os an??ncios criados pelo utilizador
- op????o selecionada por defeito
- Ao clicar no bot??o todos os an??ncios criados ser??o vis??veis na sec????o central
 |
| Hist??rico |
- Bot??o que mostrar?? todo o hist??rico de trocas, compras gratuitas e pedidos expirados ou conclu??dos.
- Ao clicar no bot??o todo o hist??rico ser?? demonstrado na sec????o central da p??gina
 |

###### Os Meus An??ncios

Aqui ser??o listados todos os an??ncios criados pelo utilizador, apenas os que n??o estiverem conclu??dos e n??o estiverem expirados.

Por defeito todos os an??ncios ser??o ordenados por categoria e data de expira????o (decrescente).

Estrutura de cada an??ncio da lista:

| **Nome** | **Requisitos** |
| --- | --- |
| Foto Principal do an??ncio | Foto em tamanho _thumbnail_ |
| T??tulo | O t??tulo do an??ncio |
| Expira????o | Data em que expira o an??ncio |
| Op????o de editar | Esta op????o abre a modal de adicionar produto preenchida com os valores do an??ncio selecionado |
| Op????o de remover | Esta op????o abre uma caixa de confirma????o perguntando se o utilizador deseja concluir esta a????o. Ap??s removido n??o ser?? poss??vel ver mais este an??ncio. |
| Categoria | Nome da categoria em que o an??ncio est?? inserido |

###### Hist??rico

Nesta p??gina ser?? poss??vel ver todos os pedidos, trocas e doa????es. No topo da sec????o central ter?? as op????es anteriormente mencionadas como filtros para uma lista que ser?? demonstrada em baixo.

**Filtros (lado esquerdo) - obrigat??rio 1 selecionado**

- Pedidos - A lista mostra apenas os pedidos
- Trocas - A lista mostra apenas as trocas
- Doa????es - A lista mostra apenas as doa????es - selecionado por defeito

**Filtros (lado direito) - obrigat??rio 1 selecionado**

- Conclu??dos - A lista mostra o filtro do lado direito selecionado e estiver conclu??do.
- Expirados - A lista mostra o filtro do lado direito selecionado e estiver expirado.

**Lista**

Dependendo dos filtros selecionados a lista ir?? ser alterada dinamicamente. Todos os itens da lista expirados, ter??o a op????o de serem novamente ativos, ap??s essa a????o ser efetuada o _item_ voltar?? para a lista dos &#39;Meus An??ncios&#39;.

**Estrutura da Lista**

| **Nome** | **Requisitos** |
| --- | --- |
| Imagem principal do an??ncio |
 |
| Titulo do an??ncio |
 |
| Categoria |
 |
| Op????o para ativar | Apenas dispon??vel se o an??ncio estiver expirado, no caso de estar conclu??do, n??o ser?? poss??vel ser ativo. |

#### Contacto

Esta p??gina dispor?? de um formul??rio de contacto para intera????o entre utilizadores e administradores.

| **Nome** | **Requisitos** | **Obrigat??rio** |
| --- | --- | --- |
| Assunto |
 | Sim |
| Tipo | _dropdown_ com op????es:
- _Feedback_
- Reportar utilizador
- Reportar fraude, spam
- Outro
 | Sim |
| Mensagem | _textarea_ minimo 5 linhas | Sim |
| Submeter | Bot??o para submeter no caso de todos os campos serem v??lidos | - |

# Use Cases

## USE CASE: Troca de artigos

Para que seja poss??vel fazer uma troca um utilizador &quot;vendedor&quot; tem de identificar um produto com o tipo de pedido &quot;Troca&quot;. Os utilizadores poder??o propor trocas por outros artigos ou propor mais do que um objeto por troca de outro.

O utilizador &quot;vendedor&quot; ter?? de ter o produto que deseja trocar com o tipo de pedido &quot;Troca&quot;, este ser?? demonstrado na lista de produtos (Home) e na p??gina de produto individual.

Na p??gina Home aparecer?? no artigo destacado que pretende fazer a troca. (TAGS)

Na p??gina individual do produto aparecer?? um bot??o para efetuar a troca. Ap??s o utilizador &quot;comprador&quot; selecionar a op????o aparecer?? uma modal (janela por cima do produto) em que aparecer?? uma barra de pesquisa e todos os artigos do utilizador &quot;comprador&quot; tem. Este poder?? selecionar mais do que um artigo para efetuar a troca.

Ap??s essa troca ser submetida esta aparecer?? para o utilizador &quot;vendedor&quot; uma notifica????o de troca na barra de menu superior do site, no clique dessa notifica????o ser?? redirecionado para &quot;Atividade&quot;.

Em Atividade o utilizador ter?? todos os pedidos de utilizadores para trocas, ofertas. Ao selecionar a troca em quest??o o utilizador ver?? uma modal com o produto requisitado para a troca e os correspondentes artigos ou artigos do utilizador comprador. O utilizador ter?? a op????o de aceitar ou negar a troca.

Caso o utilizador aceite a troca estes ter??o um prazo de 7 dias para efetuar a mesma, ap??s esse per??odo a troca ser?? cancelada. Para concluir a troca um dos utilizadores ter?? de confirmar que foi conclu??da
