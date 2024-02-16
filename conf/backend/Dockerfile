FROM amd64/alpine:3.14

RUN apk --no-cache add nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 8080

CMD ["npm", "start"]
