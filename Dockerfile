FROM node:20-alpine AS builder

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /opt/app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /opt/app ./

EXPOSE 8080

CMD ["npm", "run", "start"]

