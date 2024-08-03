FROM nginx:latest

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/index.html /var/www/public/

WORKDIR /var/www/public

CMD ["nginx", "-g", "daemon off;"]
