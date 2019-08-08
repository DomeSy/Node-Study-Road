// 内存占用和CPU占用率

const os = require('os');
const util = require('util');

// 安装插件 npm i cpu-stat -s
const cpuStat = require('cpu-stat');

// os.freemem() 方法以整数的形式回空闲系统内存的字节数。
// os.totalmem() 方法以整数的形式返回所有系统内存的字节数

// 内存占用 
// const mem = (os.freemem() / os.totalmem()) * 100;

// toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字,num位0~20之间的数   
// console.log(`内存占用${mem.toFixed(2)}%`); 

const getCpu = util.promisify(cpuStat.usagePercent);

// 获取电脑cpu占用：
// cpuStat.usagePercent((err, percent) => {
//   console.log(`CPU占用:${percent.toFixed(2)}%`);
// })

// 第二种：用util包装
getCpu().then(percent => {
  console.log(`CPU占用:${percent.toFixed(2)}%`);
});

// 加入定时器显示
const showStat = async() => {
  const mem = (os.freemem() / os.totalmem()) * 100;
  const percent = await getCpu();
  console.log(`CPU占用:${percent.toFixed(2)}% 内存: ${mem} %`); 
} 
// setInterval(showStat,1000);

module.exports = { showStat }



