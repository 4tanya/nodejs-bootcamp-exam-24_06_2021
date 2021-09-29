const morgan = require("morgan");
const path = require('path');
const rfs = require('rotating-file-stream');

/**
 * logging with morgan
 */
const accessLogStream = rfs.createStream('http.log', {
	interval: '1d', // rotate daily
	path: path.resolve('log')
});

const useMorgan = morgan('combined', { 
	stream: accessLogStream,
	skip: (req, res) => res.statusCode < 400
});

module.exports = useMorgan;
