const express = require("express");
const router = express.Router();
const { getAll } = require('../../../mongo/queries/engine');
const { handleApiError } = require('../../../utils');

router.get('/', async (req, res, next) => {
	try {
		const result = await getAll();
  
		if (!result) {
		  res.sendStatus(404);
  
		  return;
		}

		res.send(result);
	} catch (err) {
		handleApiError({ res, err });
	}
});

module.exports = router;
