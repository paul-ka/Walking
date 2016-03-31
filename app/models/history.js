// MODEL TODO
var mongoose = require('mongoose');


var historySchema = new mongoose.Schema({
  id_circuit: String,
  guest:[]
});

var History = {
    
    model: mongoose.model('History', historySchema),
    
    create: function(req, res) {
		History.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		History.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		History.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},

	delete: function(req, res){
		History.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}

module.exports = History;
