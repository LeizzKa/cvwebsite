FROM node:16-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5173

ENV PATH /app/frontend/node_modules/.bin:$PATH



CMD ["npm", "run", "dev", --host=0.0.0.0]

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html