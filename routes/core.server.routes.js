'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/index').get(core.index);
	app.route('/about').get(core.about);
//	app.route('/search').get(core.search);
	app.route('/signup').get(core.signup);
	app.route('/signin').get(core.signin);
	app.route('/profile').get(core.profile);
	app.route('/post').get(core.post);
	
	
};
