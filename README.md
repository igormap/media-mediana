# 📄 Sistema de Processamento Assíncrono de Números

## 📌 Objetivo

Este projeto tem como finalidade desenvolver uma aplicação **Full Stack** capaz de processar três números enviados por um usuário. A aplicação realiza o cálculo de **média** e **mediana** de forma **assíncrona**, utilizando filas com **RabbitMQ** e **Celery**. O sistema armazena e exibe os resultados na interface web de forma clara e reativa.

---

## 🧰 Tecnologias Utilizadas

| Camada         | Tecnologias                         | Finalidade                                                                 |
|----------------|-------------------------------------|----------------------------------------------------------------------------|
| Frontend       | Angular, Tailwind                   | Interface de envio e visualização dos dados e resultados                   |
| Backend        | Django, Django REST Framework       | API para receber dados, persistir e gerenciar comunicação com a fila       |
| Assíncrono     | Celery, RabbitMQ                    | Execução das tarefas de cálculo de forma desacoplada e escalável           |
| Banco de Dados | PostgreSQL                          | Armazenamento das requisições, status e resultados                         |
| Infraestrutura | Docker, Docker Compose              | Containerização e orquestração dos serviços                                |

---

## 🏗️ Arquitetura do Sistema

```text
Usuário → Angular → Django API → RabbitMQ → Celery Worker → Banco de Dados → Angular
```

### Componentes:
- **Frontend**: Interface para input dos dados e acompanhamento dos resultados.
- **Backend**: Gerencia o ciclo da requisição e integra com a fila.
- **RabbitMQ**: Intermediador entre backend e worker.
- **Celery**: Executa os cálculos.
- **Banco de Dados**: Centraliza informações e status dos cálculos.

---

## 🔨 Etapas de Desenvolvimento

### 1. Backend (Django + DRF)
- Criação do modelo `Processamento` com os campos `num1`, `num2`, `num3`, `status`, `media`, `mediana`.
- Criação do endpoint `POST /processar/`:
  - Valida os dados.
  - Armazena a requisição com status “Processando”.
  - Envia a tarefa para a fila do RabbitMQ.
- Criação do endpoint `GET /status/{id}` para retornar o status e resultados.
- Configuração do Celery com backend Django.
- Implementação da tarefa Celery que consome a fila, realiza os cálculos e atualiza o banco.

### 2. Frontend (Angular)
- Criação do formulário com três campos numéricos e botão "Calcular".
- Integração com a API para envio de dados.
- Criação de uma tabela dinâmica para listar as requisições.
- Implementação de polling para atualizar periodicamente o status das requisições.
- Estilização com Tailwind.

### 3. Dockerização
- Criação dos arquivos `Dockerfile` para backend, frontend e worker.
- Criação do `docker-compose.yml` com serviços:
  - `frontend` (Angular)
  - `backend` (Django)
  - `rabbitmq` (fila)
  - `worker` (Celery)
  - `db` (PostgreSQL)

---

## ⚙️ Funcionamento do Sistema

1. O usuário acessa a interface Angular e envia três números.
2. A API Django recebe os dados, armazena a requisição no banco com status “Processando” e envia para a fila RabbitMQ.
3. O worker Celery consome a fila, calcula média e mediana, e atualiza o status da requisição para “Concluído”.

---

## 📦 Execução com Docker

### Pré-requisitos:
- Docker
- Docker Compose

### Passos:
```bash
# Clonar o projeto
git clone https://github.com/igormap/media-mediana.git
cd media-mediana

# Subir os serviços
docker-compose up --build
```

### Acesso:
- Frontend: http://localhost:4200
- Backend (API): http://localhost:8000
- RabbitMQ Dashboard (opcional): http://localhost:15672

---

## ✅ Extras Implementados

- [ ] Atualização automática com WebSockets *(caso aplicável)*  
- [ ] Testes automatizados com Pytest ou Django TestCase  
- [ ] Interface responsiva com Angular Material

---

## 📁 Estrutura de Diretórios (resumida)

```text
/frontend         → App Angular
/backend          → Projeto Django
  └─ celery.py   → Configuração do Celery
  └─ tasks.py    → Tarefas assíncronas
/worker           → Código do Celery Worker
docker-compose.yml
```
