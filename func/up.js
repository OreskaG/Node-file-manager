import { currentDir } from "./currentDirectory.js";

export function up() {
    const dest = process.cwd().split('\\');
    dest.pop();
    dest.length > 1 ? process.chdir(dest.join('\\')) : process.chdir(dest[0] + '\\');
    currentDir();
}