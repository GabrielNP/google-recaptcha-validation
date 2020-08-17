var api = require('../api');

module.exports  = function(app) {
    app.route('/validate')
        .post(api.validateRecaptcha);          
};