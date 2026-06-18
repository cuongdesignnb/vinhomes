# Vinhomes Local Docker Environment Setup Guide

This document describes how to build, run, inspect, and stop the dockerized local development environment for the Vinhomes project.

## Port Assignment

To avoid port conflicts with other projects, we use a custom high-range set of ports:

| Service | Host Port | Container Port | Description |
|---|---:|---:|---|
| Next.js Web | `43873` | `3000` | Frontend Web / Dashboard |
| Laravel API | `43874` | `8000` | Backend API |
| MySQL Database | `43875` | `3306` | MySQL DB Server |
| Redis Cache | `43876` | `6379` | Redis Cache Server |
| Mailpit UI | `43877` | `8025` | Mailpit Mail Catcher Dashboard |

## Project Details

- **Project Name**: `vinhomes_lux_43873`
- **Docker Network**: `vinhomes_lux_net_43873`
- **Docker Volumes**:
  - `vinhomes_mysql_data_43875` (Persists MySQL data)
  - `vinhomes_redis_data_43876` (Persists Redis data)

---

## Instructions

### 1. Environment Configurations

Make copies of the environment template files for local Docker overrides:

```bash
# In the project root (Next.js)
cp .env.docker.example .env.docker

# In the backend directory (Laravel)
cp backend/.env.docker.example backend/.env
```

You can customize values in `.env.docker` (frontend) and `backend/.env` (backend). These files are ignored by git and will not be committed.

### 2. Build and Start Services

To build the images and run all services in detached mode:

```bash
docker compose --project-name vinhomes_lux_43873 up -d --build
```

### 3. Verify Containers

To verify the containers are running:

```bash
docker compose ps
```

### 4. Database Migration & Seeding

Run the Laravel database migrations and seeders inside the `api` container:

```bash
docker compose exec api php artisan migrate --seed
```

This will set up tables and insert the default accounts:
- Admin: `admin@vinhomes.local` / `password`
- Agent: `sale@vinhomes.local` / `password`
- Client: `khach1@vinhomes.local` / `password`

### 5. Accessing Services

Once all services are up and migrations are completed, you can access:
- **Next.js Frontend**: [http://localhost:43873](http://localhost:43873)
- **Laravel API**: [http://localhost:43874/api/v1](http://localhost:43874/api/v1)
- **Mailpit Dashboard**: [http://localhost:43877](http://localhost:43877)

---

## Troubleshooting & Container Management

### View Logs

To view real-time logs for a specific service (e.g. `web` or `api`):

```bash
docker compose logs -f web
docker compose logs -f api
```

### Stop Services

To stop the running containers without losing database data:

```bash
docker compose down
```

### Reset Database Volume

To stop the containers and delete the MySQL/Redis volumes (e.g. to start with a fresh database):

```bash
docker compose down -v
```

### Checking Port Conflicts (Windows PowerShell)

If you encounter port conflicts, you can check if ports are occupied by running:

```powershell
Get-NetTCPConnection -LocalPort 43873
Get-NetTCPConnection -LocalPort 43874
Get-NetTCPConnection -LocalPort 43875
```
