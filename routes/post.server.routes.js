'use strict';


module.exports = function(app){

 var posts = require('./../controllers/posts.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/posts')
	.get(posts.list)
	.post(users.requiresLogin, posts.create);

  app.route('/api/posts/:postId')
	.get(posts.read)
  .delete(users.requiresLogin, posts.delete);

	app.route('/api/posts/edit/:postId')
	.get(posts.read)
	.put(users.requiresLogin, posts.update);

app.route('/posts/all').get(posts.listView);
app.route('/posts/new').get(posts.createView);
app.route('/post/:postId').get(posts.singleView);


app.param('postId', posts.postByID);


}

