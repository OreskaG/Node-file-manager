import { parse, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";
import { rm } from 'fs/promises';

export async function mv(pathFile, pathDest) {
    try {
        const { base } = parse(resolve(pathFile));
        const readStream = createReadStream(resolve(pathFile));
        const writeStream = createWriteStream(resolve(pathDest, base));
        await pipeline(readStream, writeStream);
        await rm(resolve(pathFile));
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}