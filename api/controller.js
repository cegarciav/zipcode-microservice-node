'use strict';

const properties = require('../package.json')
const { numberSum } = require('../service/sum');
const { numberMultiply } = require('../service/multiply');

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
    }
};

module.exports = controllers;
