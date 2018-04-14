var mongoose = require('mongoose');
var Post = require('./../models/Post.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.createView = function(req, res){
  res.render('./../public/views/post/new.ejs', {
          user: req.user || null,
          request: req
        });
};


module.exports.singleView = function(req, res){
  res.render('./../public/views/post/view.ejs', {
          user: req.user || null,
          request: req
        });
}

module.exports.listView = function(req, res) {
    Post.find(function(err, data) {
      if (err) {
        return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
      }
      else {
        console.log("api called");

        res.render('./../public/views/post/all.ejs', {
          user: req.user || null,
          request: req,
          posts: data
        });
      }
    });
  
	
};



module.exports.list = function(req, res) {
  Post.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var post = new Post(req.body);
  post.user = req.user;
  post.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.post);
};


exports.delete = function(req, res) {
	var post = req.post;
	post.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(post);
		}
	});
};


module.exports.update = function(req, res) {
  var post = req.post;

  	post = _.extend(post, req.body);

  	post.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(post);
  		}
  	});
};

exports.postByID = function(req, res, next, id) {
	Post.findById(id).populate('user', 'email').exec(function(err, post) {
		if (err) return next(err);
		if (!post) return next(new Error('Failed to load post ' + id));
		req.post = post;
		next();
	});
};