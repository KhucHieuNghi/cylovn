FROM node:16-alpine
LABEL maintainer="cylo"
RUN apk add --no-cache libc6-compat
RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
RUN mkdir -p /app
WORKDIR /app
COPY . ./
RUN npm -g config set user root
RUN yarn install
RUN NODE_OPTIONS="--max-old-space-size=8192" yarn build
EXPOSE 3000
CMD [ "yarn", "start"]
