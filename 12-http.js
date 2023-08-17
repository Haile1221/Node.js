const http = require('http');

const server = http.createServer((req, res)=>{
 //if(req.url === '/'){
  
    res.end('Welcome to my first  Node.Js home page');
  }
if(req.url === '/about') {

    res.end('This is an about page');
}

res.end('<h1> Oops!</h1> <p> We can not get it </p> <a href="/" >Back home</a>')

})

server.listen(5000); 