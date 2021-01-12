FROM node:lts

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 20620
CMD ["node", "index.js"]