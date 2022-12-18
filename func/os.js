import { EOL, cpus, homedir, hostname, arch } from 'os';

export function os(cmd) {
    switch (cmd) {
        case '--EOL':
            console.log(JSON.stringify(EOL), EOL);
            break;
        case '--cpus':
            const result = cpus().map( i => { return { Model: i.model, Speed: `${ i.speed / 1000 } GHz`} });
            console.table(result);
            break;
        case '--homedir':
            console.log(homedir(), EOL);
            break;
        case '--username':
            console.log(hostname(), EOL);
            break;
        case '--architecture':
            console.log(arch(), EOL);
            break;
        default:
            console.log('Invalid input', EOL);
    };
}