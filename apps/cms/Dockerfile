# apps/cms/Dockerfile

FROM node:20-alpine

WORKDIR /app

# system deps
RUN apk add --no-cache libc6-compat

# copy ONLY cms package files
COPY apps/cms/package.json apps/cms/package-lock.json* ./

RUN npm ci

# copy cms source
COPY apps/cms .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
