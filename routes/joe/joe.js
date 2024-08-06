const express = require('express');
module.exports = function(server) {
    const router = express.Router();

    const joes = [
        'https://cdn.discordapp.com/emojis/1124364675774173284.webp?size=96&quality=lossless',
        'https://cdn.discordapp.com/emojis/1143834611609247774.webp?size=96&quality=lossless',
        'https://cdn.discordapp.com/emojis/1124364699899809892.webp?size=96&quality=lossless',
        'https://cdn.discordapp.com/emojis/1124364714575667372.webp?size=96&quality=lossless',
    ];

    const titles = [
        'Hello world',
        'A random joe',
        'Joe appeared',
        'Joe Joe Joe'
    ]


    router.get('/joe', (req, res) => {
        const randomJoe = Math.floor(Math.random() * joes.length);
        const randomTitle = Math.floor(Math.random() * titles.length);
        // give data back
        const data = {
            statusCode: 200,
            data: {
                title: titles[randomTitle],
                message: joes[randomJoe],
            }
        };
        res.json(data);
    });

    server.use('/', router);
};
