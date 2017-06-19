FROM nginx:1.13.1

ADD ./nginx /etc/nginx/conf.d

ADD ./build /workspace
