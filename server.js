const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);
app.use(bodyParser.json());
app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

module.exports = app; // Important for testing
