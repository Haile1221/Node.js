//common built-in modules such as os, http, fs, 

const os = require('os') // since its a built -in module nothing is not require to be installed.

// info about curreny user

const user = os.userInfo();

console.log(user);

//method the system uptime in seconds

//console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}


console.log(currentOS);