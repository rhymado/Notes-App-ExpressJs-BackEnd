'use strict'

let response = require('../response');


exports.ping = (req, res) => {
	response.ok('pong', res)
}