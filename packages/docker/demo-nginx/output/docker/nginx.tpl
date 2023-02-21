server {
    listen ${FE_PORT};
    gzip on;
    gzip_min_length 1;
    gzip_comp_level 3;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/bmp application/x-bmp image/x-ms-bmp application/vnd.ms-fontobject font/ttf font/opentype font/x-woff;

    location ${FE_PREFIX} {
        root /usr/share/nginx/html/;
        add_header Cache-Control no-cache;
        index  index.html;
        try_files $uri /djtest/index.html =404;
    }

}