const winston = require("winston");

/**
 * logging with winston
 */
const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	transports: [
	  new winston.transports.File({ dirname: 'log', filename: "error.log", level: "error" }),
	  new winston.transports.File({ dirname: 'log', filename: "info.log", level: "info" }),
	],
});

module.exports = logger;
