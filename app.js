//npm- global command, comes with node
//npm --version


//local dependency -- use it only  this project
//npm i <packageName>

//Global dependency -use it in any project
//npm install -g <packageName>

//sudo npm install -g <packageName> (mac)

//package.json --manifest file(stores important information about the project/package)

//manual approach--(create package.json in the root, createproperties etc)

//npm init(step by step, press enter to skip)

//npm init -y (evrything default)

const _ = require('lodash')

const items =[1, [2,[3,[4]]]]




const newItems = _.flattenDeep(items)


console.log(newItems);