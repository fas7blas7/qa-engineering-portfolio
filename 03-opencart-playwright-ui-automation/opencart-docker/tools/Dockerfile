FROM php:8.2-apache

# System deps
RUN apt-get update \
  && apt-get install -y \
     wait-for-it \
     unzip \
     git \
     curl \
     libfreetype6-dev \
     libjpeg62-turbo-dev \
     libpng-dev \
     libzip-dev \
     libcurl3-dev \
     libwebp-dev \
  && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
  && docker-php-ext-install -j$(nproc) gd zip mysqli curl \
  && docker-php-ext-enable gd zip mysqli curl

# Composer
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

# Copy OpenCart
COPY upload /var/www/html

WORKDIR /var/www/html

RUN if [ -f composer.json ]; then \
      composer install --no-dev --optimize-autoloader; \
    fi

# Apache rewrite
RUN a2enmod rewrite

# Fix permissions for CI
RUN chown -R www-data:www-data /var/www/html