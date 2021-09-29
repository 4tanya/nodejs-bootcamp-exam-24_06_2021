# nodejs-bootcamp-exam-24_06_2021

## Pre-conditions:

1. Install mongodb 
https://www.mongodb.com/try/download/enterprise

2. Install GUI for mongodb 
https://docs.mongodb.com/compass/master/install/

3. Create a new connection 
`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`

4. Create a database called `electric-cars`

5. Clone the repository to your computer, running the following command in your terminal:
`git clone https://github.com/4tanya/nodejs-bootcamp-exam-24_06_2021.git`


## Application consists of two microservices: *server* and *client* parts.

Directory `final-exam-may-june-2021-tatyana-korzun` contains `./server/` and `./client/` directories, which contains code for a **server** and **client** microservices appropriately.

Directory `media` contains a **presentation** and **database drawing schema**.


## To run the application locally, go through the following steps

1. Run seed script for the database, just once, using the following command:

        npm run seed-db

2. Run the backend dev server.

    2.1. Go to the `./server/` directory.

    2.2. Copy file `.env.dist` to `.env` and set up actual settings.

    2.3. Run the following npm commands:

        npm install

        npm run dev

3. Run the client dev server.

    3.1. Go to the `./client/` directory.

    3.2. Run the following npm commands:

        npm install

        npm start

    Client application dev server url - http://localhost:3000/ - will be opened automatically in the default browser.


**Make sure that both dev servers are running, go to the http://localhost:3000/ and enjoy the application!**
