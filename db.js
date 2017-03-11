/*
* @Author: Hodonou SOUNTON
* @Date:   2017-03-11 09:45:17
* @Last Modified by:   Hodonou SOUNTON
* @Last Modified time: 2017-03-11 09:47:19
*/

'use strict';

var mongoose = require('mongoose');

module.exports.db = mongoose.connect('mongodb://127.0.0.1/meanmove')