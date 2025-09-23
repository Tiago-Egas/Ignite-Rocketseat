## FinAPI - Financeira

CRUD Simples de criação de contas financeiras.

## Stack utilizada

**Back-end:** 
        [Node](https://nodejs.org),
        [Express](https://expressjs.com/)

## Rodando localmente

Clone o projeto

```bash
git clone https://github.com/Tiago-Egas/FinAPI-Ignite-Rocketseat.git
```

Entre no diretório do projeto:

```bash
cd FinAPI-Ignite-Rocketseat
```

Instale as dependências

```bash
yarn install
```

Inicie o servidor

```bash
yarn dev
```

## Usage

Importe a `FinAPI.yaml`
no Insomnia e envie as requests.

## Requisitos

- [X] Deve ser possível criar uma conta
- [X] Deve ser possível buscar o extrato bancário do cliente
- [X] Deve ser possível realizar um depósito
- [X] Deve ser possível realizar um saque
- [X] Deve ser possível buscar o extrato bancário do cliente por data
- [X] Deve ser possível atualizar dados da conta do cliente
- [X] Deve ser possível obter dados da conta do cliente
- [X] Deve ser possível deletar uma conta
- [X] Deve ser possível buscar o saldo da conta

## Regras de negócio

- [X] Não deve ser possível cadastrar uma conta com CPF já existente
- [X] Não deve ser possível buscar extrato em uma conta não existente
- [X] Não deve ser possível fazer depósito em uma conta não existente
- [X] Não deve ser possível fazer saque em uma conta não existente
- [X] Não deve ser possível fazer saque quando o saldo for insuficiente
- [X] Não deve ser possível excluir uma conta não existente
- [X] Não deve ser possível buscar saldo de conta não existente

## Melhorias

- [ ] Conectar com banco de dados
- [ ] Conteiner Docker
- [ ] Front-end


## License

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)
