const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const configPackage = require('config');
const { useAuth, useMorgan } = require('./middleware');
const { apiRouter, authRouter } = require("./router");

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const app = express();
const config = configPackage.get('app.express');

const port = process.env.APP_PORT || config.port;

/**
 * helmet
 */
app.use(helmet());

app.use(cors());

// setup the http logger
app.use(useMorgan);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

// auth
app.use('/', authRouter);

/** 
 * From the docs: http://expressjs.com/en/5x/api.html#app.use
 * 
 * instead of strict order of middleware functions 
 * there is a possibility to use series of middleware functions, separated by commas:
 * 
 * app.use(useAuth);
 * app.use('/api', apiRouter);
 * 
 * >>> app.use('/api', useAuth, apiRouter);
 * 
 * You can use this mechanism to impose pre-conditions on a route, 
 * then pass control to subsequent routes 
 * if there is no reason to proceed with the current route.
 * 
 * */ 

/**
 * It is better to specified for what routes you want to use the middleware 
 * instead of using the order of the commands.
 */

// router
app.use('/api', useAuth, apiRouter);

app.listen(port, () => {
	console.log(`Server app is running on port: ${port}`);
});
