var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParse = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function() {

	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));

	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParse.urlencoded({
		extended: true
	}));
	
	app.use(bodyParse.json());
	app.use(methodOverride());

	// app.use(session({
	// 	saveUninitialized: true,
	// 	resave: true,
	// }));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	require('../app/routes/index.server.routes.js')(app);
	app.use(express.static('./public'));

	return app;

};

// var express = require('express');

// module.exports = function() {
// 	var app = express();
// 	require('../app/routes/index.server.routes.js')(app);
// 	return app;
// };
