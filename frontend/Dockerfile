# Etapa de build
FROM node:18 AS build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Remove o conteúdo padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do Angular
COPY --from=build-stage /app/dist/frontend/browser /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
