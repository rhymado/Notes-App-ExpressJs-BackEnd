'use strict'

let response = require('../response');
let connect = require('../connect');


exports.getCategory = (req, res) => {
	connect.query(
		`SELECT * FROM category`,
		(error, rows, field) => {
			if (error) {
				throw err;
			} else {
				response.ok(rows, res)
			}
		}
	)
}

exports.getCategoryById = (req, res) => {
	id = req.params.id
	if (id != '' && id != 0) {
		connect.query(
			`SELECT * FROM category WHERE id=?`,
			(error, rows, field) => {
				if (error) {
					throw err;
				} else {
					response.ok(rows, res)
				}
			}
		)
	} else {
		return res.send({
			message: 'cannot get data'
		})
	}
}

exports.postCategory = (req, res) => {

	let name = req.body.categoryName;

	if (name != '') {
		connect.query(
			`INSERT INTO category SET category_name=?`,
			[name],
			(error, rows, field) => {
			if (rows.affectedRows != 0) {
				return res.send({
					error: false,
					data: rows,
					message: "Data has been created"
				})
			} else {
				return res.send({
					error:false,
					message: "No data has been created"
				})
			}
		})
	} else {
		res.json('categoryName cannot be Empty')
	}
}

exports.patchCategory = (req, res) => {
	let name = req.body.categoryName;
	let id = req.params.id;
 
	if (id != '' && id != 0) {
		if (name != '') {
			connect.query(
				`UPDATE category SET category_name=? WHERE id=?`,
				[name,id],
				(error, rows, field) => {
					if (rows.affectedRows != 0) {
						return res.send({
							error: false,
							data: rows,
							message: "Data has been changed"
						})
					} else {
						return res.send({
							error:false,
							message: "No data has been changed"
						})
					}
				}
			)
		} else {
			return res.send({
				message: 'categoryName cannot be Empty'
			})
		}
	} else {
		return res.send({
			error: true,
			message: 'Cannot Update Category',
		})
	}
}


exports.deleteCategory = (req, res)  => {
	let id = req.params.id

	if (id != '' && id != 0) {
		connect.query(
			`DELETE FROM category WHERE id=?`,
			[id],
			(error, rows, field) => {
				if (rows.affectedRows != 0) {
					return res.send({
						error: false,
						data: rows,
						message: "Data has been deleted"
					})
				} else {
					return res.send({
						error:false,
						message: "No data has been deleted"
					})
				}
			}
		)
	} else {
		return res.send({
			error: true,
			message: 'Cannot Delete Category',
		})
	}
}

exports.searchCategory = (req, res) => {
	let key = req.params.key;

	connect.query(
		`SELECT * FROM category WHERE category_name LIKE '%${key}%'`,
		(error, rows, field) => {
			if (error) {
				throw error;
			} else {
				res.json(rows);
			}
		}
	)
}