import { currentDir } from "./currentDirectory.js";
import { rm } from 'fs/promises';
import { resolve } from 'path';
import { EOL } from 'os';

export async function remove(cmd) {
    try {
        await rm(resolve(cmd));
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}