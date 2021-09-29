const { storeEngines } = require('./engines');

const run = async () => {
	await storeEngines();

	process.exit();
}

run();
