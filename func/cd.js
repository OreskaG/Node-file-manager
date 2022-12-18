import { currentDir } from "./currentDirectory.js";
import { resolve } from 'path';
import { EOL } from 'os';

export function cd(cmd) {
    try {
        process.chdir(resolve(cmd))
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}