## Production Build

# Stage 1: Build react client
FROM node:10.16-alpine as client

# Working directory be app
WORKDIR /usr/app/

COPY package*.json ./

COPY yarn.lock ./

# Install dependencies
RUN yarn install

COPY . .

RUN yarn build

# Stage 2 : Build nginx Server

FROM nginx:1.16.0-alpine

WORKDIR /usr/src/app/

COPY --from=client /usr/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]