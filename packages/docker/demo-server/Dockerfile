# 选择一个基础镜像: node镜像
FROM node:14
# docker工作区，把代码放这个工作区执行
WORKDIR /output
# 把代码丢到docker里
ADD . /output
# yarn install
RUN yarn
# docker对外暴露的端口号
EXPOSE 8000
# 启动
CMD node server.js