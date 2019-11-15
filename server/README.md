# Cálculo de recebíveis

> Esta aplicação foi desenvolvida utilizando Express e fornece rotas para cálculo de recebíveis.

> A taxa de recebimento antecipado é calculada a juros simples e aplicada sobre o valor líquido da transação, ou seja, primeiro é deduzida a taxa de MDR² e então é aplicada a taxa de recebimento antecipado. A taxa de recebimento antecipado é mensal, mas seu cálculo é feito com taxa diária (taxa mensal/30), uma vez que algumas transações são antecipadas por períodos menores que 30 dias.

> Máximo de parcelas é de 12.

## Index

-   [Instalar dependências](#install)
-   [Executar projeto](#run-project)
-   [Executar testes](#run-test)
-   [Gerando doc](#generate-doc)

## <a name="#install">Instalar dependências</a>

Para download das dependências

```shell
npm i
```

## <a name="run-project">Executar projeto</a>

Aplicação irá subir na porta 3000

Executar com perfil de produção:

```shell
npm start
```

Executar com perfil de desenvolvimento:

```shell
npm run dev
```

## <a name="run-test">Executar testes</a>

Esta aplição contém testes unitários

```shell
npm run test
```

## <a name="generate-doc">Gerando doc</a>

```shell
npm run doc
```

Depois de subir a aplicação, você pode acessar: `http://localhost:3000/apidoc`
Esta documentação contém exemplos para acessar os endpoints.
