/*
* @Author: drxos
* @Date:   2017-03-11 08:41:04
* @Last Modified by:   Hodonou SOUNTON
* @Last Modified time: 2017-03-11 10:53:51
*/

'use strict';
var mongoose = require('mongoose');
var Post = require('./models/posts');

// load a post
exports.load = function (req, res, next, id) {
  // set req.post
  next()
}

// list posts
// GET /posts
exports.index = function (req, res) {
  // render posts/index
  res.render('index', {title: "Bonjour à tous."})
}

// new post
// GET /posts/new
exports.new = function (req, res) {
  // render posts/new
  res.render('blog/add')
}

// create post
// POST /posts
exports.create = function (req, res) {
  // render posts/new if err
  var post = {
  	title: req.body.title,
  	body: req.body.body
  };

  mongoose.model("Post").create(post, function(err, posts){    
    if (err) {
      res.send("Error 500 ...");
    } else {
      res.render('blog/add');
      // res.send(post);
    }
  });
  // redirect to posts/:id if created
}

// show post
// GET /posts/:id
exports.show = function (req, res) {
  // render posts/show
}

// edit post
// GET /posts/:id/edit
exports.edit = function (req, res) {
  // render posts/edit
}

// update post
// PUT /posts/:id
exports.update = function (req, res) {
  // render posts/edit if err
  // redirect to /posts/:id if updated
}

// delete post
// DEL /posts/:id
exports.destroy = function (req, res) {
  // redirect to /posts
}