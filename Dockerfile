FROM nginx:1.13.0

ADD ./nginx /etc/nginx/conf.d

ADD ./build /workspace
