const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { getUser } = require('../../../mongo/queries/user');
const { handleApiError } = require('../../../utils');

router
  .post("/", async (req, res, next) => {
    const { email, password, name } = req.body;

    try {
      if (!email || !password) {
        throw new Error('Email and password are reqired.');
      }
      
      const user = await getUser({ email, password, name });
      console.log(user);

      if (!user) {
        res.sendStatus(400);

        return;
      }

      const secret = process.env.SECRET_PASSWORD;
      const token = jwt.sign({ email }, secret, { expiresIn: "24h" });

      res.status(201);
      res.setHeader('Access-Control-Expose-Headers', 'Token');
      res.setHeader('Token', token);
      res.send(user);
    } catch (err) {
      handleApiError({ res, err });
    }
  });

module.exports = router;
