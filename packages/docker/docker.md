### docker 一些命令

- docker images
- docker ps -a

- docker pull nginx
- docker rmi <IMAGE ID>
- docker rm <CONTAINER ID>

- docker run -p 8081:80 -d --name nginx1 nginx
- docker stop <IMAGE ID>

- docker logs <CONTAINER ID>
- docker inspect <CONTAINER ID>
- docker image prune 去除 none image

### 在本地起一个 nginx

docker run -p 81:80 -d --name nginx1 nginx <br>

- 本地 81 端口 map=> docker 80 端口 -d 后台运行 nginx1 container 名 nginx 镜像名
- 访问 localhost:81 看到在 docker 中的 nginx
- 进入 docker 容器修改一下 html => docker exec -it <CONTAINER ID> /bin/sh
- cd /usr/share/nginx/html

和本地 html 进行映射

- docker run -p 82:80 -d -v /Users/dingjia/cx-cli-home/xxx:/usr/share/nginx/html --name nginx2 nginx

### Dockerfile

```
FROM node:14
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai'
RUN npm install

CMD npm run server && pm2 log
```

运行新建 images 和 启动容器

```
docker build -t <image_name> .
docker run -p 8088:3000 -d --name <container_name> <image_name>
docker logs <container_id>
```

### docker-compose

启动一个 `server` 和 `redis`

```yml
version: '3'
services:
  dj-server:
    build:
      context: .
      dockerfile: Dockerfile
    image: dj-service
    container_name: dj-service
    ports:
      - 8089:3000
  dj-redis:
    image: redis
    container_name: dj-redis
    ports:
      - 6378:6379
    environment:
      - TZ=Asia/Shanghai
```

构建: `docker-compose build <server_name>`
运行 `docker-compose up -d`，验证：<br>
访问`localhost:8089`、`redis-cli -p 6378`，不需要本地启动 `redis-server`

### pm2

> yarn global add pm2

- pm2 start xxx.js
- pm2 restart <id | name>
- pm2 reload
- pm2 list
- pm2 logs <id | name>
- pm2 delete <id | name>
- pm2 monit

### pm2 基本配置

```json
{
  "apps": [
    {
      "name": "dj-pm2-config-test",
      "script": "bin/www",
      "ignore_watch": ["node_modules", "__test__", "logs"],
      "instances": 1,
      "error_file": "./logs/err.log",
      "out_file": "./logs/out.log",
      "log_date_format": "YYYY-MM-DD HH:mm:ss Z",
      "combine_logs": true,
      "max_memory_restart": "300M"
    }
  ]
}
```

### pm2 日志拆分

> yarn add pm2-logrotate

### nginx 反向代理

nginx: 80 => node 8081 java 8082 php 8083
