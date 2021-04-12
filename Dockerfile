FROM node:12-alpine AS builder
WORKDIR /app
COPY yarn.lock package.json /app/
RUN yarn install --frozen-lockfile
COPY . /app/
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
