# CallPlanner

**CallPlanner** é um projeto desenvolvido para fins de teste pela empresa **Noxtec**, utilizando **Angular v19** e a biblioteca **json-server** para simulação de uma API REST mockada.

## Objetivo

Este projeto foi criado com o objetivo de testar o desenvolvimento de uma aplicação web básica, onde as funcionalidades principais são completamente mockadas usando **json-server**. Ele visa permitir uma primeira versão mínima utilizável (MVP) para validar conceitos e fluxos de dados sem a necessidade de uma API real no início.

## Requisitos

Antes de iniciar o projeto, você precisa ter o Node.js instalado. Caso não tenha, instale a versão mais recente a partir do [site oficial](https://nodejs.org/).

## Como rodar o projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Instalar as dependências

Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

### 2. Rodar o servidor mock

Para iniciar o servidor **json-server**, que simula a API REST, execute o comando abaixo:

```bash
npm run json-server
```

Este comando irá iniciar o servidor na URL padrão (`http://localhost:3000`) e mockar as rotas REST que o projeto utiliza.

### 3. Rodar a aplicação Angular

Após o servidor mock estar rodando, inicie a aplicação Angular com o comando:

```bash
ng serve
```

Isso vai rodar a aplicação na URL `http://localhost:4200`.

## Funcionalidades

- A API mockada fornece endpoints básicos para testar o funcionamento da aplicação.
- O projeto foi desenvolvido utilizando Angular v19 com foco em práticas modernas de desenvolvimento.

## Tecnologias utilizadas

- **Angular v19**: Framework principal para o desenvolvimento da interface.
- **json-server**: Utilizado para mockar uma API REST de forma rápida e eficiente.
- **npm**: Gerenciador de pacotes para o controle de dependências.
- **AngularMaterial**: Biblioteca de UI para projeto angular.
- **Bootstrap**: Biblioteca de UI css para facilitação de desenvolvimento e praticidade.
- **Bibliotecas da comunidade**: Bibliotecas utilitárias muito úteis para diversas ocasiões.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
