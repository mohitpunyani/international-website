FROM php:8.3-cli-alpine

RUN apk add --no-cache \
    curl \
    git \
    nodejs \
    npm \
    sqlite \
    sqlite-dev \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    linux-headers \
    && docker-php-ext-install pdo pdo_sqlite pcntl bcmath zip gd

COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY backend/composer.json backend/composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --no-interaction

COPY backend/package.json backend/package-lock.json ./
RUN npm ci || npm install

COPY backend/ .
RUN composer dump-autoload --optimize --no-dev
RUN npm run build

RUN mkdir -p database storage/framework/sessions storage/framework/views storage/framework/cache bootstrap/cache && \
    touch database/database.sqlite && \
    chmod -R 777 storage bootstrap/cache database

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENV PORT=8000
EXPOSE 8000

CMD ["/usr/local/bin/docker-entrypoint.sh"]
