import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function decompress(pathFile, pathDest) {
    try {

        await pipeline(
            createReadStream(resolve(pathFile)),
            createBrotliDecompress(),
            createWriteStream(resolve(pathDest))
        );
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}