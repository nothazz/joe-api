const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 3000;

const check = chalk.green.bold('[√]');
const white = chalk.white;

const ascii = chalk.green.bold `
       ░▒▓█▓▒░░▒▓██████▓▒░░▒▓████████▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░   
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
 ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓████████▓▒░ 
                                         
`;

server.use(cors()); // Enable CORS for all routes

require('./routes/main.js')(server);
require('./routes/joe/joe.js')(server);

server.listen(port, () => {
    console.log(ascii)
    console.log(`${check} ${white('Server is listening on port')} ${port}`);
    console.log(`${check} ${white('http://localhost:3000')}`);
});

module.exports = server;
