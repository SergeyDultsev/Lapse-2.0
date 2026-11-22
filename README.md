# Lapse

Пет-проект блога на современном fullstack-стеке: NestJS + PostgreSQL на backend, React на frontend.

## Стек

**Инфраструктура**
- Docker Compose: `backend` (Node 20), `frontend` (Node 20), `db` (PostgreSQL 16)

## Требования

- [Node.js](https://nodejs.org/) v20+
- [Docker](https://www.docker.com/) с плагином Compose

## Быстрый старт (Docker)

```bash
git clone https://github.com/SergeyDultsev/Lapse.git
cd Lapse

docker compose up -d --build
```

## Полезные npm-скрипты

**Backend:** `start:dev` (watch-режим), `build`, `lint`, `test`, `seed`, `migration:generate` / `migration:run` / `migration:revert`, `shell` (шелл в docker-контейнере).

**Frontend:** `dev` (порт 5000), `build`, `lint`, `format`.