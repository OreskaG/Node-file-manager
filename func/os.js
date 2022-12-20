import { EOL, cpus, homedir, hostname, arch } from 'os';
import { currentDir } from './currentDirectory.js';

export function os(cmd) {
    switch (cmd) {
        case '--EOL':
            console.log(JSON.stringify(EOL), EOL);
            currentDir();
            break;
        case '--cpus':
            const result = cpus().map( i => { return { Model: i.model, Speed: `${ i.speed / 1000 } GHz`} });
            console.table(result);
            currentDir();
            break;
        case '--homedir':
            console.log(homedir(), EOL);
            currentDir();
            break;
        case '--username':
            console.log(hostname(), EOL);
            currentDir();
            break;
        case '--architecture':
            console.log(arch(), EOL);
            currentDir();
            break;
        default:
            console.log('Operation failed', EOL);
            currentDir();
    };
}