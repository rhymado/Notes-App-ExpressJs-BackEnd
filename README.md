<h1 align="center">ExpressJS - Simple Note App RESTfull API</h1>


Here i was built the Simple Note App which specially for backend only.
Express.js, or simply Express, is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Table of contents
* [Requirements](#requirements)
* [How to run the app ?](#how-to-run-the-app-)
* [Set up .env file](#set-up-env-file)
* [End Point List](#end-point-list)

## Requirements
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. <a href="https://expressjs.com/en/starter/installing.html">Express Js</a>
2. Body-Parser  ``` npm install body-parser --save ```
3. Mysql  ``` npm install mysql --save ```
4. CORS   ``` npm install cors --save ```
5. .ENV   ``` npm install dotenv --save ```

## How to run the app ?
1. Open CMD or Terminal and enter to the app directory
2. Type `npm install`
3. Make a new file called **.env** in the root directory, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Import file [note.sql](simple_note_app.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/note)
8. You can see all the end point [here](#end-point-list)

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT=4000
HOST=localhost
USER=root // default
PASS= // default
DATABASE=note
NODE_ENV=development node server.js
```

## End Point List
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
