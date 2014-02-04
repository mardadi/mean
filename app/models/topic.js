'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Topics Schema
 */
var TopicSchema = new Schema({
    name: {
        type: String,
        default: 'NA'
    },
    level: {
        type: Number,
        default: 0
    }
});

/**
 * Validations
 */
TopicSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');


mongoose.model('Topic', TopicSchema);
