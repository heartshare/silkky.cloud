# Mount Node Alpine
# NODE production
FROM node:16-alpine
ARG NODE_ENV=production

WORKDIR /home/silkky/app

# Copy package.json and package-lock.json
COPY package*.json ./
# Install production dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Add user 
# directory permissions
RUN addgroup -S silkky \
  && adduser -S silkky -G silkky \
  && chmod 700 /home/silkky/app \
  && chown -R silkky:silkky /home/silkky/

EXPOSE 8080

# Start app
USER silkky
CMD [ "npm", "run", "start:prod" ]