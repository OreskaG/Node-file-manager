import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { currentDir } from './currentDirectory.js';

export async function ls() {
    const folder = await readdir(resolve('./'), { withFileTypes: true });
    let resultFiles = [];
    let resultDirs = [];
    folder.forEach(i => i.isFile() ? resultFiles.push({ Name: i.name, Type: 'file'}) : resultDirs.push({ Name: i.name, Type: 'directory'}) );
    let result = resultDirs.concat(resultFiles);
    console.table(result);
    currentDir();
}