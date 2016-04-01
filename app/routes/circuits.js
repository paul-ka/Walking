// ROUTES TODOS
var Circuit = require('../models/circuit.js');
module.exports 	= function(app) {

	app.get('/circuit', Circuit.findAll);
	app.post('/circuit', Circuit.create);
	app.put('/circuit:id', Circuit.update);
	app.delete('/circuit:id', Circuit.delete);
    
}
