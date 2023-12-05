import fs from 'fs';
import path from 'path';

const currentModuleUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentModuleUrl.pathname);
const filePath = path.join(currentDir, 'input.txt');

const input = fs.readFileSync(filePath, 'utf8').trim().split('\n');
console.log(input);

function part1() {
    let sum = 0;
    for(let i=0; i< input.length; i++) {
        let first = null;
        let last = null;
        for(let j = 0; j< input[i].length; j++) {
            if(!isNaN(input[i][j])) {
                if(first === null) {
                    first = input[i][j];
                }
                last = input[i][j];
            }
        }
        sum += parseInt(first+last);
    }
    console.log(sum);
}

part1();
