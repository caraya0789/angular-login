var express = require('express');
var routes = require('./routes');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/public')));

if(app.get('env') == 'development') {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:file', routes.partials);
app.post('/login', routes.login);
app.post('/register', routes.register);

module.exports = app;
	