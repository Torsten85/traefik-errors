FROM node:16

WORKDIR  /app
COPY . .

RUN npm ci && npm run build

CMD npm run start