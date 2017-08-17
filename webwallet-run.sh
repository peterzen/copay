#!/bin/bash

if [ -n $PORT ]; then
  export NGINX_PORT="${PORT:-80}"
fi

envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g "daemon off;"
