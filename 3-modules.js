//CommonJs - every file is module(by default)
//Modules  -encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');
require('./7-collection');

//console.log(names);

sayHi('jelus');
sayHi(names.haile);
sayHi(names.tsion);
