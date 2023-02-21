FROM nginx:alpine
WORKDIR /
COPY output/djtest/ /usr/share/nginx/html/djtest/
COPY output/nginx.tpl /etc/nginx/conf.d/nginx.tpl
COPY output/entrypoint.sh /entrypoint.sh
# CMD [ "sh", "/entrypoint.sh" ]