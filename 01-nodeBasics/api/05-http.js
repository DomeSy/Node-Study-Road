// http协议

const http = require('http');
const fs = require('fs');

// Accept代表发送端（客户端）希望接受的数据类型。 
//  比如：Accept：text/xml; 代表客户端希望接受的数据 类型是xml类型。 
// Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 
//  比如：Content-Type： text/html; 代表发送端发送的数据格式是html。
// 二者合起来， Accept:text/xml； Content-Type:text/html ，
// 即代表希望接受的数据类型是xml格式，本次请 求发送的数据的数据格式是html
const server = http.createServer((req, res) => {
  // console.log('res',getPrototypeChain(res));

  const { url, method, headers } = req;
  if(url === '/' && method === 'GET') {
    fs.readFile('./index.html', (err, data) => {
      if(err){
        res.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    })
    // 编写一个接口
  }else if(url === './users' && method === 'GET'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify([{ name:"abc"}]));
  }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1 ){
    fs.createReadStream('.' + url).pipe(res);
  }
  
  // res.end('Hello World');
})

server.listen(3000);

// 打印原型链
function getPrototypeChain(obj) {
  const protoChain = [];
  while(obj = Object.getPrototypeOf(obj)){
    protoChain.push(obj);
  }
  protoChain.push(null);
  return protoChain
}