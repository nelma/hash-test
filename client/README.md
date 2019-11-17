# Cálculo de recebíveis - Client

> Esta aplicação foi desenvolvida utilizando Express e fornece tela para inserção dos valores e rotas para chamar o serviço que irá calcular.

> Você precisar passar grossValue, installments e MDR para simular quanto irá receber em caso de antecipação.

## Index

-   [Instalar dependências](#install)
-   [Executar projeto](#run-project)
-   [Buildar projeto](#build-project)
-   [Executar teste](#run-test)

## <a name="#install">Instalar dependências</a>

Para download das dependências

```shell
npm i
```

## <a name="run-project">Executar projeto</a>

Aplicação irá subir na porta 8080

Executar com perfil de produção:

```shell
npm start
```

Executar com perfil de desenvolvimento:

```shell
NODE_ENV=development npm run dev
```

## <a name="build-project">Buildar projeto</a>

Gerando `/dist`

```shell
npm run build
```

## <a name="run-test">Executar testes</a>

Esta aplição contém testes unitários com `jest`

```shell
npm run test
```
