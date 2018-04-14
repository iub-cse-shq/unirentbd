'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.search = function(req, res) {
	res.render( './../public/views/search.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.signup = function(req, res) {
	res.render( './../public/views/user/signup.ejs', {
		user: req.user || null,
		request: req
	});
	
};

exports.profile = function(req, res) {
	res.render( './../public/views/profile.ejs', {
		user: req.user || null,
		request: req
	});
	
};




//---------------------------------------------------------
