// ROUTES TODOS
var Circuit = require('../models/circuit.js');
module.exports 	= function(app) {

	app.get('/', Circuit.findAll);
	app.post('/', Circuit.create);
	app.put('/:id', Circuit.update);
	app.delete('/:id', Circuit.delete);
    
}
