// 文件系统
const fs = require('fs');

// path:路径
const path = require('path');

// 同步读取
const data = fs.readFileSync('./02-useModule-index.js');

// data是一个二进制的数
// console.log(data.toString());

// 异步读取
// fs.readFile('./02-useModule-index.js',(err,data) => {
//   console.log(data.toString());
// })

// 问题：如果运行的不是当前文件夹内，比如说是上级文件，这时引入文件当前的时候会出现错误，这时需要引入path来解决
// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
// __dirname 返回当前模块文件解析过后所在的文件夹(目录)的绝对路径
// __filename 返回当前模块文件被解析过后的绝对路径
fs.readFile(path.resolve(__dirname, './02-useModule-index.js'),(err,data) => {
  console.log(data.toString());
})