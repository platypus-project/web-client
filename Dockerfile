FROM node:14.21.0-alpine

RUN apk add --no-cache git

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node . .

ENV GENERATE_SOURCEMAP=false

# Building the production-ready application code - alias to 'nest build'
RUN yarn install --legacy-peer-dep

RUN yarn build

CMD [ "yarn", "serve" ]
