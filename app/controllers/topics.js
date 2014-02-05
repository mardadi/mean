'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Topic = mongoose.model('Topic'),
    _ = require('lodash');


/**
 * List of Topics to learn
 */
exports.all = function(req, res) {
    Topic.find().exec(function(err, topics) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(topics);
        }
    });
};