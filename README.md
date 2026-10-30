
# API de Gerenciamento de Pedidos

Este projeto foi desenvolvido como parte de uma atividade prática da faculdade. A proposta é criar uma API para facilitar o gerenciamento de pedidos, permitindo cadastrar, consultar, listar e atualizar informações de cada pedido.

Durante o desenvolvimento, coloquei em prática conceitos de JavaScript, Node.js, Express e organização de código, buscando deixar o projeto simples, organizado e fácil de entender.

### Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Jest
- Postman

### Como executar o projeto

Primeiro, é necessário ter o Node.js instalado no computador.

Após baixar o projeto, abra o terminal na pasta principal e execute:

```bash
npm install
```

Esse comando instala as dependências necessárias.

Para iniciar a API, utilize:

```bash
npm start
```

Depois disso, ela estará disponível no endereço:

http://localhost:3000

### O que a API permite fazer?

Atualmente, é possível:

- Cadastrar novos pedidos.
- Visualizar todos os pedidos cadastrados.
- Consultar um pedido específico pelo seu ID.
- Atualizar o status de um pedido.
- Validar as informações enviadas.
- Impedir alterações de status que não sejam permitidas.

### Rotas disponíveis

| Método | Endereço | Funcionamento |
|---|---|---|
| POST | /pedidos | Cadastrar um pedido |
| GET | /pedidos | Listar os pedidos |
| GET | /pedidos/:id | Consultar um pedido pelo ID |
| PATCH | /pedidos/:id/status | Atualizar o status |

### Respostas da API

A API utiliza os seguintes códigos HTTP para indicar o resultado das requisições:

- 200: requisição realizada com sucesso.
- 201: pedido criado com sucesso.
- 400: dados inválidos ou mudança de status não permitida.
- 404: pedido não encontrado.
- 500: erro interno inesperado do servidor.

### Exemplo de cadastro

Para cadastrar um pedido, envie uma requisição POST para `/pedidos` com os seguintes dados:

```json
{
  "cliente": "Carlos Silva",
  "tipo": "entrega",
  "valor": 350,
  "prioridade": "normal"
}
```

O sistema gera automaticamente um ID e define o status inicial como `recebido`.

Os tipos de pedido aceitos são `entrega` e `retirada`. As prioridades disponíveis são `normal` e `alta`.

Os status utilizados são `recebido`, `em_preparacao`, `enviado`, `entregue` e `cancelado`. O sistema também verifica se a mudança de status respeita as etapas permitidas.

### Organização dos arquivos

O projeto foi dividido em três partes principais:

- `routes`: responsável por definir os caminhos e as requisições da API.
- `controllers`: responsável por receber as requisições e retornar as respostas.
- `services`: responsável pelas regras de negócio, validações e operações com os pedidos.

Os pedidos são armazenados temporariamente na memória da aplicação. Por isso, os dados são perdidos quando o servidor é reiniciado.

### Testes

Foram desenvolvidos testes automatizados utilizando Jest para verificar o funcionamento das principais operações e validações do sistema.

Para executar os testes, utilize:

```bash
npm test
```

Atualmente, o projeto possui 10 testes automatizados aprovados.

Também foram realizados testes manuais utilizando o Postman. As capturas de tela estão disponíveis na pasta `evidencias`.

### Uso de inteligência artificial

Durante o desenvolvimento, utilizei inteligência artificial como apoio para compreender os conceitos, organizar a estrutura do projeto, solucionar erros e aprender a desenvolver os testes automatizados.

As orientações foram analisadas e aplicadas conforme a necessidade do projeto. Procurei compreender o funcionamento de cada parte e realizar os testes para verificar se tudo estava funcionando corretamente.

---

Projeto desenvolvido para fins acadêmicos.
