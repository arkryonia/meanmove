/*
* @Author: Hodonou SOUNTON
* @Date:   2017-03-11 09:51:37
* @Last Modified by:   Hodonou SOUNTON
* @Last Modified time: 2017-03-11 10:24:26
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	title: {type: String, required: true},
	author: {type: String, required: true, default: 'Hodonou Sounton'},
	body: String,
	created: {type: Date, default: Date.now},	
});

mongoose.model('Post', PostsSchema);