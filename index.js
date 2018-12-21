const fs = require('fs');
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));


const x = require('./calc.js')


console.log('value:', x.join('\n'))

fs.writeFileSync('yay.txt', x.join('\n'))
