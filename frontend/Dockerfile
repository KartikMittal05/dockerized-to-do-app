# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY --from=build /app/public ./public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 