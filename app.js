var express = require('express')
	,http = require('http')
	,path = require('path')
	,app = express()
	,fs = require('fs')
	,favicon = require('serve-favicon')
	,morgan = require('morgan')
	,bodyParser = require('body-parser')
	,methodOverride = require('method-override')
	,cookieParser = require('cookie-parser')
	,session = require('express-session')
	,router = express.Router();

// database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/msg-reader');

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
app.use(cookieParser('123'));
app.use(session({secret: '123', resave: false, saveUninitialized: true}));
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		route.controller(app);
	}
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});