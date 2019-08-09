// 模拟Express实现原理

const express = require('./kpress');
const app = express();

app.get("/", (req, res) => {
  
  // 当出现一个莫须有的错误时，会影响整个程序进行，其实会抛出到node上
  // abc(); // 故意执行一个没有定义的方法
  
  res.end("Hello World");
});

app.get('/users', (req, res) => {
  res.end(JSON.stringify([{ name: "Domesy", age: 20}]));
});

// 放在服务器中
// process.on('uncaughtException',err => {
//   console.log('错误', err);
// })

app.listen(3000, () => {
  console.log('Example app listen at 3000');  
})