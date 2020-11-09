#  Dockerfile for Node Express Backend api (development)

FROM node:10.16-alpine

WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["npm","start"]