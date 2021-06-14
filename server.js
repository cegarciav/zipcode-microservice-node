const express = require('express');
const nodemailer = require('nodemailer');
const appLogger = require('./logs');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);

// Make appLogger available for the whole app
app.locals.logger = new appLogger('development');

// Make email account and email service available for the whole app
async function startEmailSender() {
    app.locals.emailSender = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "INSERT EMAIL", // generated ethereal user
            pass: "INSERT PASSWORD", // generated ethereal password
        },
    });
}

startEmailSender();

app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

module.exports = app; // Important for testing
