const http = require('http');
const fs = require('fs');

http.createServe((req, res) => {
  const {method, url} = req;
  if(method === 'GET' && url === '/'){
    fs.readFile('./index.html', (err,data) =>{
      res.setHeader('Context-Type','text/html');
      res.end(data);
    })
  }else if(method === 'GET' && url === '/api/users'){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.end(JSON.stringify([{name: 'domesy'}]))
  }
})
.listen(3000);