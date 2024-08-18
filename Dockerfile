FROM node:20.12.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["node", "build/index.js"]