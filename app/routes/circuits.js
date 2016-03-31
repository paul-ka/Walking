// ROUTES TODOS
var Circuit = require('../models/circuit.js');
module.exports 	= function(app) {

	app.get('/circuits', Circuit.findAll);
	app.post('/circuits', Circuit.create);
	app.put('/circuits/:id', Circuit.update);
	app.delete('/circuits/:id', Circuit.delete);
    
}
