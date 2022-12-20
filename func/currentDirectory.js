import { EOL } from 'os';

export function currentDir() {
    console.log(`You are currently in ${process.cwd()}`, EOL);
}