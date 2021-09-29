const { save, getAll } = require('../queries/engine');

const storeEngines = async () => {
	const items = await getAll();

	if (items.length) return;

	for (let i = 1; i < 4; i++) {
		await save({
			charging_level: i,
			hybrid: (i % 2 === 0),
		});
	}
};

module.exports = { storeEngines };
