FROM nginx:1.13.12

COPY dist/freyja-demoapp/ /usr/share/nginx/html
