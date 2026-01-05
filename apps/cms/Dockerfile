FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .


RUN npm run build

ENV NODE_ENV=production
EXPOSE 8080

CMD ["npm", "run", "start"]
