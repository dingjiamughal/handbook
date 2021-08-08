FROM node:14
WORKDIR /app-foundation
COPY . /app-foundation

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai'
RUN npm install --registry=https://registry.npm.taobao.org

CMD npm run dev