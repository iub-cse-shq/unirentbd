'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/signup.server.controller');
	app.route('/').get(core.index);
	app.route('/index').get(core.index);
	app.route('/about').get(core.about);
	app.route('/search').get(core.search);
	app.route('/signup').get(core.signup);
	app.route('/profile').get(core.profile);
	
	
};

/*
module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/products')
	.get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
  .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);

app.route('/products/all').get(products.listView);
app.route('/products/new').get(products.createView);
app.route('/product/:productId').get(products.singleView);


app.param('productId', products.productByID);


}
*/
