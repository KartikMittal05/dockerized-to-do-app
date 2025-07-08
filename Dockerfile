FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY backend ./backend

EXPOSE 5000

CMD ["node", "backend/server.js"] 