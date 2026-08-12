# ------------------------- base stage 
FROM node:22-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# -------------------- Dev stage
FROM base AS development

EXPOSE 5173
CMD ["npm", "run", "dev"]

# -------------------- Build stage

FROM base AS builder
ARG VITE_MODE=production
RUN npm run build -- --mode=$VITE_MODE

# -------------------- Production stage

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]