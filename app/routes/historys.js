// ROUTES TODOS
var History = require('../models/history.js');
module.exports 	= function(app) {

	app.get('/historys', History.findAll);
	app.post('/historys', History.create);
	app.put('/historys/:id', History.update);
	app.delete('/historys/:id', History.delete);
    
}
