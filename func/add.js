import { writeFile } from 'fs/promises';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";
import { resolve } from 'path';

export async function add(cmd) {
    try {
        await writeFile(resolve(cmd), '', { flag: 'wx'});
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}