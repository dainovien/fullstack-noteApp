FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]
