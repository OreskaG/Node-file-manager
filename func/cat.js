import { createReadStream } from 'fs';
import { resolve } from 'path';
import { EOL } from 'os';
import { currentDir } from "./currentDirectory.js";

export async function cat(cmd) {

    const stream = createReadStream(resolve(cmd), { encoding: "utf-8" });

    try {
    stream.on("data", (chunk) => {
        console.log(chunk)
    });
    
    stream.on("error", () => {
        console.log("Operation failed");
    });

    stream.on("end", () => {
        console.log('');
        currentDir();
    });
    } catch {
        console.log('Operation failed', EOL);
    }
}