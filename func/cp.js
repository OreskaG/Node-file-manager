import { parse, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function cp(pathFile, pathDest) {
    try {
        const { base } = parse(resolve(pathFile));
        const readStream = createReadStream(resolve(pathFile));
        const writeStream = createWriteStream(resolve(pathDest, base));
        await pipeline(readStream, writeStream);
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}