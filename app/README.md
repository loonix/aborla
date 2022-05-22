# Aborla App

s## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you stasrted if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.


# Aplicação móvel

## 6.1 Estrutura

A aplicação móvel será desenvolvida na framework _Flutter_ e programada na linguagem _Dart,_ e conectada aos serviços de base de dados da Google Firebase. Esta _app_ será o ponto de acesso para dispositivos móveis, sendo que será otimizada para _tablets_ e _smartphones_.

## _Splashscreen_ ![](RackMultipart20220521-1-3c31ik_html_a915308ce63bb285.png)

Este será o ecrã de entrada na aplicação, este terá o logótipo da empresa e aparecerá durante alguns segundos até todos os dados serem carregados.

## Cabeçalho

![](RackMultipart20220521-1-3c31ik_html_76692bbc82e1db85.png)

Destina-se a identificar a página em que o utilizador se situa e também mostrar o menu da aplicação. Esta secção da aplicação estará presente em praticamente todas as páginas, com a exceção do ecrã de Login, Registo e _Splashscreen_.

A estrutura desta secção será composta por:

| **Nome** | **Requisitos** | **Exemplo** |
| --- | --- | --- |
| Título da Página | Não deve conter mais de 20 caracteres | Inicio |
| Menu Lateral | Abre o menu lateral | Verificar secção: Menu Lateral |
| Voltar ao ecrã anterior | apenas visível quando o ecrã em questão É auxiliar a um ecrã principal | verificar secção: Adicionar artigo para troca |

### Menu Lateral

![](RackMultipart20220521-1-3c31ik_html_28fb214e9d016444.png)

Este menu, pertencente ao cabeçalho dispõe das seguintes opções:

| **Nome** | **Requisitos** |
| --- | --- |
| Feed | Redireciona o utilizador para o ecrã Feed |
| Login | Apenas visível se o utilizador não tiver a sessão iniciadaRedireciona o utilizador para o ecrã de Login. |
| Registar | Apenas visível se o utilizador não estiver com sessão iniciadaRedireciona o utilizador para o ecrã Registar |
| Minha Conta | Apenas visível se o utilizador tiver sessão iniciadaRedireciona o utilizador para o ecrã Minha Conta |
| Mensagens | Apenas visível se o utilizador tiver sessão iniciadaRedireciona para o ecrã Mensagens |
| Definições | Apenas visível se o utilizador tiver sessão iniciadaRedireciona para o ecrã Definições |

#### Minha Conta

![](RackMultipart20220521-1-3c31ik_html_864cc40764d542f8.png)

Este mostrará ao utilizador todos os seus anúncios e opções para os gerir.

##### Abas superiores

Esta secção do ecrã Minha Conta irá disponibilizar marcadores com os seguintes nomes:

- **Anúncios** - mostra a aba de anúncios
- **Histórico** - mostra a aba de histórico
- **Perfil** - mostra a aba do perfil

###### Anúncios

Aqui serão listados todos os anúncios criados pelo utilizador, apenas os que não estiverem concluídos e não estiverem expirados (conforme na imagem anterior).

Por defeito todos os anúncios serão ordenados por categoria e data de expiração (decrescente).

Estrutura de cada anúncio da lista:

| **Nome** | **Requisitos** |
| --- | --- |
| Foto Principal do anúncio | Foto em tamanho thumbnail |
| Título | O título do anúncio |
| Expiração | Data em que expira o anúncio |
|


Opções (Ícone: Roda dentada) |
Editar | Para ver esta opção será necessário arrastar o anúncio para o lado direito.Esta opção abre a modal de adicionar produto preenchida com os valores do anúncio selecionado |
|

Remover | Para ver esta opção será necessário arrastar o anúncio para o lado direito.Esta opção abre uma caixa de confirmação perguntando se o utilizador deseja concluir esta acção. Após removido não será possível ver mais este anúncio. |
| Categoria | Nome da categoria em que o anúncio está inserido |

###### Histórico

![](RackMultipart20220521-1-3c31ik_html_1018e08bb86cd8de.png)

Neste ecrã será possível ver todos os pedidos, trocas e doações. Para facilitar a pesquisa terá um botão para filtros adicionais seguido de uma barra de pesquisa.

**Filtros**

![](RackMultipart20220521-1-3c31ik_html_36ae978ccfa8be36.png)

Obrigatório 1 selecionado de cada secção

**Tipo:**

- Pedidos - A lista mostra apenas os pedidos
- Trocas - A lista mostra apenas as trocas
- Doações - A lista mostra apenas as doações - selecionado por defeito

**Estado:**

- Concluídos - A lista mostra todos os anúncios concluídos.
- Expirados - A lista mostra todos os anúncios expirados. - selecionado por defeito

**Lista**

Dependendo da pesquisa e filtros selecionados a lista irá ser alterada dinamicamente. Todos os itens da lista expirados, terão a opção de serem novamente ativos, após essa ação ser efetuada o item voltará para a lista dos &#39;Anúncios&#39;.

**Estrutura da Lista**

| **Nome** | **Requisitos** |
| --- | --- |
| Imagem principal do anúncio |
 |
| Titulo do anúncio |
 |
| Categoria |
 |
| Data de expiração | Apenas disponível quando filtrados os anúncios expirados |
| Data de conclusão | Apenas disponível quando filtrados os anúncios concluídos |
|
Opções (Ícone: Roda dentada) |

Ativar | Esta opção apenas estará disponível se o anúncio estiver expirado. No caso do anúncio estar completo não terá esta opção |
| Categoria | Nome da categoria em que o anúncio está inserido |

######


###### Perfil

Terá uma breve informação sobre o utilizador com a sessão iniciada.

| **Nome** | **Requisitos** |
| --- | --- |
| Foto do Utilizador |
 |
| Alterar Foto | Abre o explorador de imagens nativo do dispositivo, com a opção de tirar uma fotografia. |
| Nome do utilizador |
 |
| Total de artigos | Mostrará o total de artigos que o utilizador possui ate a data (pedidos, trocas, ofertas) |

######


#### Adicionar Artigo

![](RackMultipart20220521-1-3c31ik_html_62fa6d4a48913cd8.png)

Esta opção abrirá um novo ecrã em que o utilizador terá a opção de adicionar entre 1 a 3 fotos do artigo, terá também de identificar a categoria, localização e tipo de pedido.

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Nome do Produto |
- input de uma linha
- máximo 24 caracteres
 | Sim |
| Upload de imagens |
- Máximo 3 ficheiros de imagem
- Formato dos ficheiros .jpg, .png, .bmp
- opção de selecionar uma das imagens como destaque (lista de produtos)
- Abre a câmera do dispositivo por defeito
 | Sim |
| Descrição |
- textarea
 | Não |
| Categoria |
- dropdown com pesquisa de categorias
 | Sim |
| Localização |
- dropdown com pesquisa de cidade/freguesia
 | Sim |
| Tipo de Pedido |
- dropdown com 3 opções
  - Pedido
  - Troca
  - Doação
 | Sim |
| Data de expiração |
- componente de seleção de data e hora
- data e hora \&gt; data e hora atual
- 3 opções para o utilizador
  - Listar por 3 dias - por defeito
  - Listar por 7 dias
 | Sim |
| Confirmar |
- Apenas ativo quando todos os campos sejam preenchidos
- Redireciona o utilizador para o ecrã Destacar anuncio
 | Sim |

#### Destacar Anuncio

![](RackMultipart20220521-1-3c31ik_html_ed9f28fe61738c6a.png)

O utilizador verá sempre este ecrã apos concluir a adição de um anúncio. O utilizador terá de selecionar uma das seguintes opções:

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Destacar anuncio no site |
- O anúncio será destacado por 3 dias
- Visível apenas no site
- Terá o custo de 3 euros
 | Não |
| Destacar anuncio na app |
- O anúncio será destacado por 3 dias
- Visível apenas na aplicação móvel
- Terá o custo de 3 euros
 | Não |
| Destacar anuncio no site e na aplicação |
- O anúncio será destacado por 3 dias
- Visível na aplicação móvel e no site
- Terá o custo de 5 euros
 | Não |
| Não destacar este anúncio |
- Esta opção não cobrara ao utilizador e poderá adicionar o anúncio, apenas não será destacado na lista.
 | Não |

No caso do utilizador selecionar a opção &#39;Não destacar este anúncio&#39; será direcionado para o novo anúncio criado.

Caso o utilizador selecionar uma das restantes opções será redirecionado para o ecrã de pagamento.

#### Pagamento

O seguinte ecrã disponibilizara a opção de pagamento com cartão de crédito ou MBWay. Na opção de cartão de crédito será redirecionado para o formulário de registo do cartão em que o utilizador terá a opção de guardar o mesmo.

O utilizador poderá remover ou editar os seus cartões a qualquer momento através do ecrã &#39;Minha Conta&#39;.

![](RackMultipart20220521-1-3c31ik_html_6defd556791bf43a.png)

No caso do utilizador ter registado cartões na sua conta, quando este selecionar a opção &#39;Pagar com cartão de crédito&#39; será visível uma lista dos cartões do utilizador (máximo 2) e uma opção para adicionar um novo cartão.

Se o utilizador selecionar um dos cartões será necessária uma autenticação biométrica para poder efetuar a compra (_pin_ ou _fingerprint_), isto protegera o utilizador do dispositivo contra compras indesejadas.

![](RackMultipart20220521-1-3c31ik_html_2ed2a462db2ed961.png)

#### Login

O ecrã de _login_ será demonstrado apenas quando o utilizador não estiver com sessão iniciada, no caso do utilizador entrar nele através do link disponível no menu lateral ou quando não tiver sessão iniciada e tentar adicionar um produto.

![](RackMultipart20220521-1-3c31ik_html_6a74adbcb0d35536.png)

O login é composto dos seguintes campos:

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Email |
- input do tipo email
- validação para email
 | sim, para o login normal |
| Password |
- input tipo password
- máscara de input para não ser visível o que o utilizador escreve
 | sim, para o login normal |
| Butão &#39;Login&#39; | Valida o formulário e redireciona o utilizador para a página home | Apenas estará ativo se o _login_ e _password_ forem introduzidos |
| Login com Google | Passa para um formulário de _login_ em que pede as credenciais da conta Google do utilizador para ser associada a aplicação. | n/a |
| Login com Facebook | Passa para um formulário de _login_ em que pede as credenciais da conta Facebook do utilizador para ser associada a aplicação. | n/a |
| Botão &#39;Registar&#39; | Redireciona o utilizador para o formulário de registo | n\a |

#### Login com redes sociais

Após o utilizador fazer o login no caso de este ser o primeiro login efetuado com as redes sociais sera redirecionado para o ecrã de registo:

![](RackMultipart20220521-1-3c31ik_html_a98f330e13cf4972.png)

#### Registo

O registo estará disponível para o utilizador quando a sessão não estiver iniciada e apenas visível quando redirecionado pelo ecrã de _login_.

O utilizador poderá escolher entre dois tipos de contas:

- **Particular** - Destinada a individuais
- **Empresa** - Destinada a coletivos, empresas ou ONG&#39;s

![](RackMultipart20220521-1-3c31ik_html_82f2caa858717479.png)

Este será composto por um ecrã com as seguintes opções de registo:

| **Nome** | **Requisitos** | **Obrigatório** |
| --- | --- | --- |
| Nome |
 | Sim |
| Email | validação de email | Sim |
| Código Postal | apenas visível para registo de individuais | Não |
| Localização | opção drop down com lista e pesquisa de freguesias/cidades | Sim |
| Contacto | número de telefone ou móvel | Sim |
| Data de Nascimento |
- o utilizador terá de ter uma idade superior a 18 anos
- Apenas visível para registo de individuais
 | Sim |
| Botão &#39;Registar&#39; | Valida todos os campos e submete o registo. | n\a |
| Botão &#39;Cancelar&#39; | Volta ao ecrã anterior (se existente) caso contrário redireciona o utilizador para o ecrã Home | n\a |

## Feed

Nesta página serão apresentados os artigos. Na parte superior terá o título da página &#39;Feed&#39;.

![](RackMultipart20220521-1-3c31ik_html_175dafb2b018dab9.png)

### Pesquisa

A barra de pesquisa contará com um input para pesquisa por texto.

![](RackMultipart20220521-1-3c31ik_html_f23c1270a8627672.png)

### Botão de Filtros

Esta irá disponibilizar opções de filtros de auxílio à pesquisa, como categorias (e.g. Serviços, Materiais de construção, eletrodomésticos), localização (por cidade/freguesia), tipo de pedido (troca, doação ou pedido).

![](RackMultipart20220521-1-3c31ik_html_97e9137cc7332d61.png)

### Destaques

Nesta seção terá uma lista de produtos de scroll horizontal em que a estrutura será igual aos produtos mostrados na lista. Esta lista estará limitada a 5 produtos por pesquisa.

Caso a pesquisa não encontre nenhum destaque, esta secção não será visível para o utilizador.

Os artigos destacados terão uma imagem maior que os restantes anúncios.

### Lista de produtos

Esta lista será disponibilizada no ecrã Feed na após a secção de destaques. Aqui serão demonstrados todos os produtos em formato de grelha ou lista.

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
| Função de toque | abre um novo ecrã com informações mais detalhadas do produto | Ver secção &quot;Produto Individual&quot; | Sim |

#### Produto Individual

![](RackMultipart20220521-1-3c31ik_html_2e794296cd8415b9.png)

A partir da lista de produtos será possível aceder individualmente a cada produto com apenas um toque, para tal será criado um ecrã generalista para que qualquer produto seja demonstrado. Neste ecrã será possível ver todas as informações relativas ao produto, desde nome, informações detalhadas, tipo de pedido até mesmo informações sobre o anunciante e como o contactar.

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
| Contacto | Proveniente do registo do utilizador | número de telemóvel do anunciante | não(apresenta mensagem a dizer que não é possível ver, tem de se registar ou iniciar sessão) |
| Nome do Anunciante | Proveniente do registo do utilizador | Jorge Gomes | sim |
| Data de expiração |
 | Expira em 5 dias | sim |
| Botão &#39;Editar&#39; | Apenas visível se este produto tenha sido criado pelo utilizador |
 | não |
