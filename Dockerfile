FROM node:9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install --production

COPY index.js /usr/src/app/

EXPOSE 80

CMD [ "npm", "start" ]