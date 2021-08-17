console.log('--- child ---');
console.log(process.pid);
process.on('message', msg => console.log('收到主进程的信息：' + msg));
process.send('child process');
