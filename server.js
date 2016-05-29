var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(require('./auth'));


// posts 종단점 분리.
app.use('/api/posts', require('./controllers/api/posts'));
// sessions 종단점 분리.
app.use('/api/sessions', require('./controllers/api/sessions'));
// users 종단점 분리.
app.use('/api/users', require('./controllers/api/users'));



// index template 분리.
app.use('/', require('./controllers/static'));


app.listen(3000, function(){
    console.log('Server listening on', 3000);
});