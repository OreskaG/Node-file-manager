import { homedir, EOL } from 'os';
import { createInterface } from 'readline';
import { ls } from './func/ls.js';
import { os } from './func/os.js';
import { currentDir } from './func/currentDirectory.js';
import { up } from './func/up.js';
import { cd } from './func/cd.js';
import { inputConverter } from './func/inputConverter.js';
import { cat } from './func/cat.js';
import { add } from './func/add.js';
import { remove } from './func/rm.js';
import { hash } from './func/hash.js';

let userName = 'Anonymous';
if (process.argv.length > 2) {
    if (process.argv[2].startsWith('--username=')) {
        userName = process.argv[2].split('=')[1];
    };
};
console.log(`Welcome to the File Manager, ${userName}!`, EOL);

process.chdir(homedir());
currentDir();

const readline = createInterface(process.stdin, process.stdout);

readline.on('line', async (input) => {

    const cmd = inputConverter(input);

    switch (cmd[0]) {
        case '.exit':
            if (cmd.length === 1) {
                readline.question('Are you sure you want to exit?(y/yes) ', (answer) => {
                    if (answer.match(/^y(es)?$/i)) readline.close();
                });
                break;
            }
        case 'ls':
            if (cmd.length === 1) {
                ls();
                break;
            }
        case 'os':
            if (cmd.length === 2) {
                os(cmd[1]);
                break;
            }
        case 'up':
            if (cmd.length === 1) {
                up();
                break;
            }
        case 'cd':
            if (cmd.length === 2) {
                cd(cmd[1]);
                break;
            }
        case 'cat':
            if (cmd.length === 2) {
                cat(cmd[1]);
                break;
            }
        case 'add':
            if (cmd.length === 2) {
                add(cmd[1]);
                break;
            }
        case 'hash':
            if (cmd.length === 2) {
                hash(cmd[1]);
                break;
            }
        case 'rm':
            if (cmd.length === 2) {
                remove(cmd[1]);
                break;
            }
        default:
            console.log('Invalid input', EOL);
            currentDir();
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