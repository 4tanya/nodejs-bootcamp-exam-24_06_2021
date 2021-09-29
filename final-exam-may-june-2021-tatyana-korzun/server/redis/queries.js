const client = require('./client');

const getKey = async (key) => {
	const promise = new Promise((resolve, reject) => {
		client.get(key, (err,  value) => {
			err && reject(err);

			resolve(JSON.parse(value));
		});
	});

	return await promise;
};

const setKey = (key, value) => client.set(key, JSON.stringify(value));

const delKeys = (keys) => client.del(keys);

const getHashKey = async (group, key) => {
	const promise = new Promise((resolve, reject) => {
		client.hget(group, key, (err,  value) => {
			err && reject(err);

			resolve(JSON.parse(value));
		});
	});

	return await promise;
};

const setHashKey = (group, key, value) => client.hset(group, key, JSON.stringify(value));

const delHashKey = (group, key) => client.hdel(group, key);

module.exports = {
	getKey,
	setKey,
	delKeys,
	getHashKey,
	setHashKey,
	delHashKey,
};
