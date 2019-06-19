'use strict'

let response = require('../response')
let connect = require('../connect')

exports.getNote = (req, res) => {
	connect.query(
		`SELECT note.id, title, note, time, category_name FROM note LEFT JOIN category ON category.id = note.category_id`,
		(error, rows, field) => {
			if (error) {
				throw error;
			} else {
				response.ok(rows, res)
			}
		}
	)
}

exports.getNoteById = (req, res) => {
	let id = req.params.id

	if (id != 0 && id != '') {
		connect.query(
			`SELECT note.id, title, note, time, category_id, category_name FROM note LEFT JOIN category ON category.id = note.category_id WHERE note.id=?`,
			[req.params.id],
			(error, rows, field) => {
				if (error) {
					throw error;
				} else {
					response.ok(rows, res)
				}
			}
		)
	} else {
		return res.send({
			message: 'Cannot get Data'
		})
	}
}

exports.postNote = (req, res) => {
	let title = req.body.title;
	let note = req.body.note;
	let category_id = req.body.category;

	if (title != '' && note !='' && category_id != '') {
		connect.query(
			`INSERT INTO note SET title=?, note=?, category_id=?`,
			[title,note,category_id],
			(error, rows, field) => {
				if (rows.affectedRows != 0) {
					return res.send({
						error: false,
						data: rows,
						message: 'data has been created'
					})
				} else {
					return res.send({
						error:false,
						message: "No data has been created"
					})
				}
			}
		)
	} else {
		return res.send({
			message: 'Data cannot be Empty',
		})
	}
}

exports.patchNote = (req, res) => {
	let title = req.body.title;
	let note = req.body.note;
	let category_id = req.body.category;
	let id = req.params.id;

	if (id != '' && id != 0) {
		if (title != '' && note != '' && category_id != '') {
			connect.query(
				`UPDATE note SET title=?, note=?, category_id=? WHERE id=?`,
				[title,note,category_id, id],
				(error, rows, field) => {
					if (rows.affectedRows != 0) {
						return res.send({
							error: false,
							data: rows,
							message: 'data has been updated'
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
				message: 'Data cannot be Empty'
			})
		}
	} else {
		return res.send({
			error: true,
			message: 'Cannot update Note',
		})
	}
}

exports.deleteNote = (req, res) => {
	let id = req.params.id;

	if (id != '' && id != 0) {
		connect.query(
			`DELETE FROM note WHERE id=?`,
			[id],
			(error, rows, field) => {
				if (rows.affectedRows != 0) {
					return res.send({
						error: false,
						data: rows,
						message: 'data has been deleted'
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
			message: 'Cannot delete Note',
		})
	}
}