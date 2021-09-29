# node-js-exam-may-june-2021

Pre-conditions:

1. Install mongodb 
https://www.mongodb.com/try/download/enterprise

2. Install GUI for mongodb 
https://docs.mongodb.com/compass/master/install/

3. Create a new connection 
`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`

4. Create a database called `electric-cars`


Application consists of two microservices: client and server parts.

1. Run seed scripts for the database, just once.

`npm run seed-db`

2. Run the backend dev server.

2.1 Go to the ./server/ directory.

2.2 Copy file .env.dist to .env and set up actual settings.

2.3 Run the following npm commands:

`npm install`

`npm run dev`

3. Run the client dev server.

3.1 Go to the ./client/ directory.

3.2 Run the following npm commands:

`npm install`

`npm start`

Client application dev server url - http://localhost:3000/ - will be opened automatically in the default browser.


Make sure that both dev servers are running, go to the http://localhost:3000/ and enjoy the application!
