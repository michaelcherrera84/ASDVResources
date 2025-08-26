# ----------------------
# Stage 1: Build React App
# ----------------------
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# ----------------------
# Stage 2: Serve with Nginx
# ----------------------
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Cloud Run port
EXPOSE 8080