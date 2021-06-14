# Contributing to the Pancake ecosystem 🥞

Thanks for taking the time to contribute !
You can start by reading our [Contribution guidelines](https://docs.pancakeswap.finance/code/contributing) first.

## Setup

Create a `.env.development.local` file at the root of the project. Add the following lines inside :

```
REACT_APP_CROWDIN_APIKEY = ""
REACT_APP_CROWDIN_PROJECTID = ""
```

You'll need this in order to get the i18n system to work. Contact a dev if you need these values.

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Projet structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Tests

Run tests with `yarn test`.

## Localisation

_In order for the Crowdin API queries to work - you will need `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID` env variables set in your root `.env.development.local` file_

### Adding translations

A hook expose the function you need to translate content.

```
import useI18n from 'hooks/useI18n'
...
const TranslateString = useI18n()
...
TranslateString(id, 'fallback')
```

- **id** is the crowdin id of the string you want to translate.
- **fallback** is a string fallback used if the id cannot be found.

### Variables

The translation component can handle variables being passed in from Crowdin, with no code changes.

It will only work if there is only **one** variable passed in, and if that variable within Crowdin is wrapped in **%** signs, i.e.:

Translation in crowdin: `%asset% Earned` [link](https://crowdin.com/translate/pancakeswap/8/en-de#330)






************


# Contribuindo para o ecossistema Pancake 🥞

Obrigado por dedicar seu tempo para contribuir!
Você pode começar lendo nossas [diretrizes de contribuição] (https://docs.pancakeswap.finance/code/contributing) primeiro.

## Configurar

Crie um arquivo `.env.development.local` na raiz do projeto. Adicione as seguintes linhas dentro:

`` `
REACT_APP_CROWDIN_APIKEY = ""
REACT_APP_CROWDIN_PROJECTID = ""
`` `

Você precisará disso para fazer o sistema i18n funcionar. Entre em contato com um desenvolvedor se precisar desses valores.

Instale as dependências

`` `shell
fio
início do fio
`` `

Não se esqueça de configurar seu IDE com `eslint` e` mais bonito`.

## Estrutura do projeto

- ** componentes ** contém componentes genéricos usados ​​dentro do aplicativo.
- ** visualizações ** contém blocos de construção para cada página. O ponto de entrada de uma vista é usado como o componente raiz de cada rota.
- ** config ** contém todos os arquivos de configuração e ABIs.
- ** state ** contém os arquivos redux para o estado global do aplicativo.
- ** contexto ** contém contextos globais (separados da loja redux)
- ** ganchos ** contém ganchos genéricos.
- ** utils ** contém funções de utilitários genéricos.

## Testes

Execute testes com `yarn test`.

## Localização

_Para que as consultas da API Crowdin funcionem - você precisará das variáveis ​​env `REACT_APP_CROWDIN_APIKEY` e` REACT_APP_CROWDIN_PROJECTID` definidas no arquivo raiz `.env.development.local`_

### Adicionando traduções

Um gancho expõe a função de que você precisa para traduzir o conteúdo.

`` `
import useI18n de 'hooks / useI18n'
...
const TranslateString = useI18n ()
...
TranslateString (id, 'fallback')
`` `

- ** id ** é o id do crowdin da string que você deseja traduzir.
- ** fallback ** é um fallback de string usado se o ID não puder ser encontrado.

### Variáveis

O componente de tradução pode lidar com variáveis ​​que estão sendo passadas do Crowdin, sem alterações de código.

Ele só funcionará se houver apenas ** uma ** variável passada, e se essa variável dentro do Crowdin for agrupada em sinais de **% **, ou seja:

Tradução no crowdin: `% asset% Earned` [link] (https://crowdin.com/translate/pancakeswap/8/en-de#330)
