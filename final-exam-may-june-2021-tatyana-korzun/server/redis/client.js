const redis = require('redis');
const configPackage = require('config');

const config = configPackage.get('app.redis');

const host = process.env.APP_HOST || config.host;
const port = process.env.REDIS_PORT || config.port;

const redisUrl = `redis://${host}:${port}`;
const client = redis.createClient(redisUrl);

module.exports = client;
