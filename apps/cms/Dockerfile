FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat


COPY package.json package-lock.json ./


RUN npm install --legacy-peer-deps


COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]
