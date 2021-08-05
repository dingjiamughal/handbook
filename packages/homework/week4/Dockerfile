FROM node:14
WORKDIR /app2
COPY . /app2

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai'
RUN npm install --registry=https://registry.npm.taobao.org
RUN cd app3 && npm install --registry=https://registry.npm.taobao.org 

CMD npm run start:all