import { rename } from 'fs/promises';
import { parse, resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function rn(path, name) {
    try {
        const { dir } = parse(path);
        await rename(resolve(path), resolve(dir, name));
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}