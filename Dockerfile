FROM nginx:1.13.12

COPY dist/freyja-demo/ /usr/share/nginx/html
