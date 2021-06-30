# Mount Node Alpine
# NODE production
FROM keymetrics/pm2:14-alpine
ARG NODE_ENV=production

LABEL org.opencontainers.image.source=https://github.com/silkkycloud/silkky.cloud

WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./
# Install production dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

USER node
EXPOSE 8080

# Start app
CMD [ "pm2-runtime", "start", "pm2.json" ]