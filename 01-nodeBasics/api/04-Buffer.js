// Buffer:用于处理二进制
// alloc:分配10个内存空间
// 创建一个长度为10字节以0填充的Buffer 
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 表示的时候是16进制的数
const buf2 = Buffer.from('a');
console.log(buf2);

const buf3 = Buffer.from('中国');
console.log(buf3);

// concat:连接
const buf4 = Buffer.concat([buf2,buf3]);
console.log(buf4.toString());