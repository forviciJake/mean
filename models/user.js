var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth_demo', function(){
    console.log('mongodb connected!')
});

var user = mongoose.Schema({
	username: { type: String, require: true },
    password: { type: String, require: true, select: false }
});   
    
module.exports = mongoose.model('User', user);