const express = require("express");
const router = express.Router();
const { getByBrand, storeCar } = require('../../../mongo/queries/car');
const { handleApiError } = require('../../../utils');

router
  .post("/", async (req, res) => {
    try {
      const {
        body: { brand, model, imageRef, engineId },
      } = req;

      const result = await storeCar({
        brand, model, imageRef, engineId
      });

      if (!result) {
        handleApiError({ res, err });

        return;
      }

      res.status(201).send(result);
    } catch (err) {
		handleApiError({ res, err });
    }
  })
  .get('/:brand', async (req, res, next) => {
	const { brand } = req.params;

	try {
		const results = await getByBrand(brand);
  
		if (!results) {
		  res.sendStatus(404);
  
		  return;
		}

		res.send(results);
	} catch (err) {
		handleApiError({ res, err });
	}
});

module.exports = router;
