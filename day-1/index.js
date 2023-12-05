import fs, { writeFileSync } from 'fs';
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
}

part1();

const numberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five' : 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5' : 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
}

function part2() {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      const values = [];
      for (let j in numberMap) {
        let index = -1;
        while ((index = input[i].indexOf(j, index + 1)) !== -1) {
          values.push(`${index}-${numberMap[j]}`);
        }
      }
      values.sort((a, b) => a.split('-')[0] - b.split('-')[0]);
      console.log(values);
      writeFileSync('output.txt',  values[0].split('-')[1]+values[values.length-1].split('-')[1]+'\n', {flag: 'a'});
      sum += parseInt(values[0].split('-')[1] + values[values.length - 1].split('-')[1]);
    }
    console.log(sum);
  }
  

part2();