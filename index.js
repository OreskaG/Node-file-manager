import { homedir, EOL } from 'os';
import { createInterface } from 'readline';
import { ls } from './func/ls.js';

let userName = 'Anonymous';
if (process.argv[2].startsWith('--username=')) {
    userName = process.argv[2].split('=')[1];
};
console.log(`Welcome to the File Manager, ${userName}!`, EOL);

process.chdir(homedir());
console.log(`You are currently in ${process.cwd()}`, EOL);

const readline = createInterface(process.stdin, process.stdout);

readline.on('line', async (input) => {
    switch (input.split(' ')[0]) {
        case '.exit':
            readline.question('Are you sure you want to exit?(y/yes) ', (answer) => {
                if (answer.match(/^y(es)?$/i)) readline.close();
            });
            break;
        case 'ls':
            ls();
            break;
        default:
            console.log('Invalid input', EOL);
    };
});


readline.on('SIGINT', () => {
    readline.question('Are you sure you want to exit?(y/yes) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) readline.close();
    });
});

readline.on('close', () => {
            console.log(`Thank you for using File Manager, ${userName}, goodbye!`, EOL);
            process.exit();
});