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
