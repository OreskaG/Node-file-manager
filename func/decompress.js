import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function decompress(pathFile, pathDest) {
    try {
        if(!parse(pathFile).ext.includes('.br')) throw new Error;
        await pipeline(
            createReadStream(resolve(pathFile)),
            createBrotliDecompress(),
            createWriteStream(resolve(pathDest, parse(pathFile).name))
        );
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}