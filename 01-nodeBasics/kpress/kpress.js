const http = require('http');
const url = require('url');
const { EventEmitter } = require('events');

const router = [];

class Application extends EventEmitter {
  // 在index.js中用了get和listen方法，所以对应也要有相应的方法
  
  // get对应的是url，和后面的方法
  get(path, handler){
    if(typeof path === 'string'){
      router.push({
        path,
        method:'get',
        handler
      })
    }
  }
  
  // listen对应监听的端口号
  listen(){
    const  server = http.createServer((req, res) => {

      // url.parse:一个URL字符串转换成对象并返回
      const { pathname } = url.parse(req.url,true);

      for(const route of router) {
        const { path, method, handler } = route;

        // 注意转化为小写，GET变为get
        if(pathname === path && req.method.toLocaleLowerCase() === method){
          return handler(req,res);
        }
      }
    })

    server.listen(...arguments);

    // 事件与异常处理
    // 监听：会抛出错误，但不会影响当前页面的执行
    // process.on('uncaughtException', err => {
    //   console.log('Server Exception:',err)
    // })
  }
}

module.exports = function createApplication() {
  
  return new Application()
}