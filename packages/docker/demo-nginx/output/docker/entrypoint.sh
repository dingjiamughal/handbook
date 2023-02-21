#!/bin/sh

# 初始化参数
export FE_PORT=${FE_PORT:-80}
export FE_PREFIX=${FE_PREFIX:-"/djtest"}
export FE_WORKER_PROCESSES=${FE_WORKER_PROCESSES:-8}


# 调整配置
cd /etc/nginx/conf.d
envsubst '\$FE_PORT \$FE_PREFIX' < nginx.tpl > default.conf

# 启动
nginx
