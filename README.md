<h1 align="center">ExpressJS - Simple Note App RESTfull API</h1>



Note App is a simple note application specially for backend only. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. <a href="https://expressjs.com/en/starter/installing.html">Express Js</a>
2. Body-Parser  ``` npm install body-parser --save ```
3. Mysql  ``` npm install mysql --save ```
4. CORS   ``` npm install cors --save ```
5. .ENV   ``` npm install dotenv --save ```
6. <a href="https://www.getpostman.com/">Postman</a>

## How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Open file called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name note, and Import file [note.sql](note.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/note)
8. You can see all the end point [here](#end-point)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT=3000
HOST=localhost
USER=root // default
PASS= // default
DATABASE=note
NODE_ENV=development node server.js
```

## End Point
**1. GET**
* `/note`
* `/note/:id` (Get notes by id)
* `/category`
* `/category/:id` (Get category by id)

**2. POST**
* `/note`
* `/category`

**3. PATCH**
* `/note/:id` (Update notes by id)
* `/category/:id` (Update category by id)

**4. DELETE**
* `/note/:id` (Delete notes by id)
* `/category/:id` (Delete category by id)
