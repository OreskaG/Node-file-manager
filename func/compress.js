import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function compress(pathFile, pathDest) {
    try {
        if (!pathDest.endsWith('.br')) {
            pathDest += '.br';
        }
      
        await pipeline(
            createReadStream(resolve(pathFile)),
            createBrotliCompress(),
            createWriteStream(resolve(pathDest))
        );
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}