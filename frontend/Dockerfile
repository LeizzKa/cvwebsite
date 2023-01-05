FROM node:16-alpine
COPY frontend/ app/
WORKDIR /app
ENV PATH /app/frontend/node_modules/.bin:$PATH


RUN npm i
CMD ["npm", "run dev", "--port 3000"]