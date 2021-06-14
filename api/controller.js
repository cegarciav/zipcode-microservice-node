'use strict';

const properties = require('../package.json')
const { numberSum } = require('../service/sum');
const { numberMultiply } = require('../service/multiply');
const { randomPassWord } = require('../service/randomPassword');

const controllers = {
    about: function(req, res) {
        let aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getSum: async function(req, res) {
        try {
            const values = req.query.values;
            if (!values)
                throw "values param is required";
            const numbers = String(values).split(",");
            if (numbers.length === 0)
                throw "values param must be a list of comma-separated numbers";
            let finalSum = await numberSum(...numbers);
            res.json({
                message: "ok",
                result: finalSum
            });
        }
        catch (e) {
            req.app
                .locals
                .logger
                .debugLog(
                    'controller.js:52',
                    'some error',
                    e
                );
            res.status(400)
            res.json({
                message: "error",
                result: e
            });
        }
    },
    getProduct: async function(req, res) {
        try {
            const values = req.query.values;
            if (!values)
                throw "values param is required";
            const numbers = String(values).split(",");
            if (numbers.length === 0)
                throw "values param must be a list of comma-separated numbers";
            let finalProduct = await numberMultiply(...numbers);
            res.json({
                message: "ok",
                result: finalProduct
            });
        }
        catch (e) {
            res.status(400)
            res.json({
                message: "error",
                result: e
            });
        }
    },
    createUser: async function(req, res) {
        try {
            let password = randomPassWord();
            req.app.locals.emailSender.sendMail({
                from: '<bananus.assist@gmail.com>', // sender address
                to: "email1@email.com, email2@email.com, ..., emailn@email.com", // list of receivers
                subject: "Access to Bananus Assist Platform", // Subject line
                html: `<h3>¡Hola!</h3><p>Tienen acceso a Bananus, su contraseña es: ${password}</p><p>¡Saludos!</p>`, // html body
            });
            res.json({
                message: "ok"
            });
        }
        catch (e) {
            res.status(400)
            res.json({
                message: "error",
                result: e
            });
        }
    }
};

module.exports = controllers;
