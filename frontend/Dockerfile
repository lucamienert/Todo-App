# Build step
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
