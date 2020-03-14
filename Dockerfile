FROM nginx:latest

WORKDIR /var/www

COPY build /var/www

COPY nginx.conf /etc/nginx/nginx.conf