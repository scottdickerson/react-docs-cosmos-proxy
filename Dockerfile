# Easiest way to get npm@5 https://github.com/npm/npm/issues/16807
FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY tools tools

# Without --unsafe-perm the npm lifecycle scripts will fail because we're root
# in the container. Unfortunately --ignore-scripts will ignore scripts in
# node_modules as well so that's not an option.
RUN npm install --unsafe-perm --quiet

COPY . .
