# ============================
# BUILD STAGE
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies (lockfile is required)
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite project
RUN npm run build

# ============================
# RUN STAGE
# ============================
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# No início do estágio builder
FROM node:20-alpine AS builder

WORKDIR /app

# Adicione estas linhas
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
