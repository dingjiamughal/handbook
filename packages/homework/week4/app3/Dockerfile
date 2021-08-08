FROM node:14
WORKDIR /app-vue
COPY . /app-vue

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai'
RUN npm install --registry=https://registry.npm.taobao.org

CMD npm run dev