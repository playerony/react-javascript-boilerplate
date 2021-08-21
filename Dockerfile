# build stage
FROM node:14-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

# nginx stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
