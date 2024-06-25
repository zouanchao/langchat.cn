FROM node:18-alpine AS base

WORKDIR /app

FROM base AS deps
RUN apk add --no-cache libc6-compat

COPY package.json .
COPY .npmrc .
COPY ./public ./public

RUN  yarn global add pnpm && pnpm i

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/public ./public
COPY . .

RUN yarn global add pnpm && pnpm build

FROM base AS runner

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./standalone
COPY --from=builder --chown=nextjs:nodejs /app/public ./standalone/public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./standalone/.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME 0.0.0.0


CMD ["node", "standalone/server.js"]
