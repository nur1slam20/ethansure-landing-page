FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
