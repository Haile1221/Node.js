const path = require('path');

console.log(path.sep);


const filePath = path.join('/content', 'subcontent', 'test.txt');

console.log(filePath);


//to access the innermost of file (inside the subfolder

const base = path.basename(filePath);
console.log(base);

const absolute =path.resolve(__dirname, 'content', 'subcontent', 'test.text');

console.log(absolute);