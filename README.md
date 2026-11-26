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
git clone https://github.com/SergeyDultsev/Lapse-2.0.git
cd Lapse-2.0

docker compose up -d --build
```

## Полезные npm-скрипты

**Backend:** `start:dev`

```bash
docker compose exec backend npm run migration:generate
```

```bash
docker compose exec backend npm run migration:run
```

```bash
docker compose exec backend npm run migration:revert
```

```bash
docker compose exec backend npm run seed
```

**Frontend:** `dev` (порт 5000), `build`, `lint`, `format`.