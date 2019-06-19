
//================ VARIABEL =================//

let express = require('express')
let cors = require('cors')
let app = express()
require('dotenv/config')
let port = process.env.PORT
let bodyParser = require('body-parser')
let routes = require('./routes')


//========== INITIALIZE BODY PARSER ===========//

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.use(bodyParser.json())

//============= CONFIGURASI CORS ==============//

// var whitelist = ['http://192.158.100.78', 'http://192.168.898.18', 'http://192.168.8.102'] // PERMITED ORIGIN

// corsOption = {
// 	origin: (origin, callback) => {
// 		if (whitelist.indexOf(origin) !== -1 || !origin) {
// 			callback(null, true)
// 		} else {
// 			callback(new Error('Not allowed by CORS'))
// 		}
// 	}
// }

app.use(cors());


//============= LOGGED MIDDLEWARE ==============//

app.use((req, res, next) => {
	console.log('Someone Logged with method', req.method, 'at', Date.now(), 'in', req.url)
	next()
})

routes(app)
app.listen(port)
console.log('Listening to Port '+ port)

