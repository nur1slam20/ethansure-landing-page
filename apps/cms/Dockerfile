FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json package-lock.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
RUN pnpm run build

ENV NODE_ENV=production
EXPOSE 8080
CMD ["pnpm","start"]
