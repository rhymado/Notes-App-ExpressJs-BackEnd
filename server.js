
//================ VARIABEL =================//

let express = require('express')
let cors = require('cors')
let app = express()
require('dotenv/config')
let port = process.env.PORT || 3000
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

app.use(cors());


//============= LOGGED MIDDLEWARE ==============//

app.use((req, res, next) => {
	console.log('Someone Logged with method', req.method, 'at', Date.now(), 'in', req.url)
	next()
})

routes(app)
app.listen(port)
console.log('Listening to Port '+ port)

