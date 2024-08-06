const express = require('express');
module.exports = function(server) {
    const router = express.Router();

    // Define your routes here
    router.get('/', (req, res) => {
        res.send('Hello World!');
    });

    server.use('/', router);
};
