const logger = require('./loggerConfig');

const handleUnAuthorisedError = (res, error) => {
	res.status(401);
	res.send({
		error: 'You are not authorised.'
	});
	
	return;
};

const handleApiError = ({ res, err }) => {
	const errorObject = { error: `App is crashed. ${err}` };
	logger.error(errorObject);

	res.status(500);
	res.send(errorObject);
};

module.exports = {
	handleUnAuthorisedError,
	handleApiError,
};
