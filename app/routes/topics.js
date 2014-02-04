'use strict';

module.exports = function(app) {
    
    // Home route
    var topics = require('../controllers/topics');
    app.get('/topics', topics.all);

};
