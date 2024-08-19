FROM --platform=linux/arm64 node:20.12.0-alpine AS builder
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm

COPY . /usr/src/app
COPY package*.json ./

RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:20.12.0-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm i --only=production
RUN npx prisma generate

COPY --from=builder /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]