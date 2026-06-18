# Vinhomes Backend API

Laravel 12 REST API for the Vinhomes premium real-estate website. The API is mounted under `/api/v1` and is designed for the existing Next.js frontend through `NEXT_PUBLIC_API_BASE_URL=https://your-domain.com/api/v1`.

## Stack

- Laravel 12
- Laravel Sanctum token auth
- MySQL for production
- SQLite in-memory for tests
- Local public/private storage by default, ready to extend to S3

## Local Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Default accounts:

- `admin@vinhomes.local` / `password`
- `sale@vinhomes.local` / `password`
- `khach1@vinhomes.local` / `password`

## Main Endpoints

- Public: `/api/v1/home`, `/api/v1/projects`, `/api/v1/projects/{slug}`, `/api/v1/news`, `/api/v1/news/{slug}`, `/api/v1/contact`
- Forms: `/api/v1/leads`, `/api/v1/contact-requests`, `/api/v1/appointments`
- Auth: `/api/v1/auth/login`, `/api/v1/auth/register`, `/api/v1/auth/me`, `/api/v1/auth/profile`, `/api/v1/auth/change-password`
- User: `/api/v1/user/dashboard`, `/api/v1/user/saved-projects`, `/api/v1/user/documents`, `/api/v1/user/payments`, `/api/v1/user/notifications`
- Admin: `/api/v1/admin/dashboard`, `/api/v1/admin/projects`, `/api/v1/admin/property-products`, `/api/v1/admin/leads`, `/api/v1/admin/news`, `/api/v1/admin/seo/pages`, `/api/v1/admin/media`

All API responses use:

```json
{
  "success": true,
  "message": "Thanh cong",
  "data": {},
  "meta": {}
}
```

## Production Deploy With Git Pull

```bash
git pull
cd backend
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
cd ..
npm ci
npm run build
```

Then restart the PHP-FPM/queue worker and the Next.js process or service.

Recommended env values:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.example.com
DB_CONNECTION=mysql
FRONTEND_URL=https://example.com
CORS_ALLOWED_ORIGINS=https://example.com
SANCTUM_STATEFUL_DOMAINS=example.com
```

Frontend:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com/api/v1
```

## Verification

```bash
php artisan test
php artisan route:list --path=api/v1
```
