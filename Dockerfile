FROM node:14-alpine

RUN apk add --no-cache git

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node . .

# Building the production-ready application code - alias to 'nest build'
RUN yarn install --legacy-peer-dep && yarn build

CMD [ "yarn", "serve" ]
