import { currentDir } from "./currentDirectory.js";

export function up() {
    process.chdir('..');
    currentDir();
}