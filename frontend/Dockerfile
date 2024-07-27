# Frontend docker

FROM node:18-bullseye-slim as build-stage

WORKDIR /app
RUN corepack enable
RUN corepack prepare pnpm@9.1.0 --activate

COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install 

COPY . .
ENV NODE_OPTIONS="--max-old-space-size=6384"
RUN pnpm build

FROM caddy:2-alpine as production-stage

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build-stage /app/dist /usr/share/caddy
