FROM node:22.2.0
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]
