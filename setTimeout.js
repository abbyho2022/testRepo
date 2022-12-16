
// // 函数实现，参数单位 秒 ；
// function wait(second) {
//     // execSync 属于同步方法；异步方式请根据需要自行查询 node.js 的 child_process 相关方法；
//     let ChildProcess_ExecSync = require('child_process').execSync;
//     ChildProcess_ExecSync('sleep ' + second);
//     console.log('sleep ' + second)
// };

// // 调用方法；休眠 60 秒，即 1 分钟；
// wait( 6 ); 
// console.log('aaa')

// 参数单位为： 秒数 ；
// function wait(haomiao) { 
//     // 将毫秒参数，转换为 秒数 ；
//     let miao = haomiao / 1000; 
//     let sleep = require('sleep').sleep; 
//     sleep(miao);
//     console.log(miao)
// };

// // 休眠 60 秒，即 1 分钟；范畴上属于同步方法；
// console.log('start')
// wait(3000); 
// console.log('end')

// 函数实现，参数单位 毫秒 ；
function wait(ms) {
    return new Promise(resolve =>setTimeout(() =>resolve(), ms));
};

// 调用方法；
wait(5000);
console.log('start')