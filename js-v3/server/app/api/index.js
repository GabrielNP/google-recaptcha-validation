var env = require('../../../environment')

var api = {}

api.validateRecaptcha = function(req, res) {
    const captcha = req.body.token;
    const secretKey = env.SECRET_KEY;
    const fetch = require('node-fetch');
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
    
    // Hard coded response for testing
    // data = {"success":true,"challenge_ts":"2020-08-17T14:41:47Z","hostname":"localhost","score":0.41,"action":"submit_form"}
    // res.json(data)

    // Real response from Google Recaptcha API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
}

module.exports = api;