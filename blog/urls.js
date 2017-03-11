/*
* @Author: Hodonou SOUNTON
* @Date:   2017-03-11 08:42:14
* @Last Modified by:   Hodonou SOUNTON
* @Last Modified time: 2017-03-11 09:07:11
*/

'use strict';


var operations = require('./operations')

// posts crud routes
module.exports.urls = function(app) {
	app.get('/posts', operations.index);
	app.get('/posts/new', operations.new);
	app.post('/posts', operations.create);
	app.get('/posts/:id', operations.show);
	app.get('/posts/:id/edit', operations.edit);
	app.put('/posts/:id', operations.update);
	// app.del('/posts/:id', operations.destroy);
}
