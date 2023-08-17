const{readFileSync, writeFileSync} = require('fs');

console.log('Start');
const first = readFileSync('./content/subcontent/first.txt', 'utf8');
const second = readFileSync('./content/subcontent/second.txt', 'utf8');



//console.log(first, second);

writeFileSync('./content/result-Sync.txt', `Here is the result:${first}, ${second}`, {flag: 'a'}); // {flag: 'a'} used to append or over write

console.log('Done with this task');
console.log('Starting with the next one');