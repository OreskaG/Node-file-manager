import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { parse, resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function compress(pathFile, pathDest) {
    try {
        await pipeline(
            createReadStream(resolve(pathFile)),
            createBrotliCompress(),
            createWriteStream(resolve(pathDest, `${parse(pathFile).base}.br`))
        );
    } catch {
        console.log('Operation failed', EOL);
    } finally {
        currentDir();
    }
}