import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function add(cmd) {
    try {
        await writeFile(cmd, '', { flag: 'wx'});
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}