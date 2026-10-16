#!/bin/sh
set -e

cd /app

if [ ! -f .env ]; then
  cp .env.example .env
fi

mkdir -p database storage/framework/sessions storage/framework/views storage/framework/cache bootstrap/cache
touch database/database.sqlite
chmod -R 777 storage bootstrap/cache database

if ! grep -q "APP_KEY=base64:" .env 2>/dev/null; then
  php artisan key:generate --force
fi

php artisan migrate --force --seed || true
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Starting Tantia University Laravel on 0.0.0.0:${PORT:-8000}..."
exec php artisan serve --host=0.0.0.0 --port="${PORT:-8000}"
