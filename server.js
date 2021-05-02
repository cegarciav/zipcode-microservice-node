const express = require('express');
const appLogger = require('./logs');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);

// Make appLogger available for the whole app
app.locals.logger = new appLogger('development');


app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

module.exports = app; // Important for testing
