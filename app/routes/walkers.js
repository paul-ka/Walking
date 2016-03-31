// ROUTES TODOS
var Walkers = require('../models/walkers.js');
module.exports 	= function(app) {

	app.get('/walkers', Walkers.findAll);
	app.post('/walkers', Walkers.create);
	app.put('/walkers/:id', Walkers.update);
	app.delete('/walkers/:id', Walkers.delete);
    
}
