'use strict';

var controller = require('./controller');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
    app.route('/sum')
        .get(controller.getSum);
    app.route('/multiply')
        .post(controller.getProduct);
};