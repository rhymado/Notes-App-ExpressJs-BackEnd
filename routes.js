'use strict'

module.exports = (app) => {

	//======= Make Variabel for Controller =======//

	let home = require('./controller/home')
	let note = require('./controller/note')
	let category = require('./controller/category')


	//=================== HOME ====================//

	app.get('/', home.welcome)


	//=================== NOTE ====================//

	app.get('/note', note.getNote)			
	app.get('/note/:id', note.getNoteById)	
	app.post('/note', note.postNote)		
	app.patch('/note/:id', note.patchNote) 	
	app.delete('/note/:id', note.deleteNote)	


	//================ CATEGORY ===================//
	
	app.get('/category', category.getCategory) 			
	app.get('/category/:id', category.getCategoryById) 	
	app.post('/category', category.postCategory) 		
	app.patch('/category/:id', category.patchCategory) 		
	app.delete('/category/:id', category.deleteCategory) 				

	
}