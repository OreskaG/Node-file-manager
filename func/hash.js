import { createHash } from "crypto"
import { readFile } from "fs/promises";
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";
import { resolve } from 'path';

export async function hash(cmd) {
    try {
        const text = await readFile(resolve(cmd));
        console.log(createHash('sha256').update(text).digest('hex'), EOL);
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
};