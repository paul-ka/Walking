// ROUTES TODOS
var Walker = require('../models/walker.js');
module.exports 	= function(app) {

	app.get('/walkers', Walker.findAll);
	app.post('/walkers', Walker.create);
	app.put('/walkers/:id', Walker.update);
	app.delete('/walkers/:id', Walker.delete);
    
}
