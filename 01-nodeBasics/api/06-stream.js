// stream - 是用于与node中流数据交互的接口

const fs = require('fs');

// createReadStream:打开一个可读的文件流并且返回一个fs.ReadStream对象
// createWriteStream:创建一个写流
const rs2 = fs.createReadStream('./img.png');
const ws2 = fs.createWriteStream('./img2.png');

// 将img.png 复制一份到 img2.img
// pipe：管道流
rs2.pipe(ws2);