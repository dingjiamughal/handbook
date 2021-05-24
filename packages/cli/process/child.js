console.log('--- child ---');
console.log(process.pid);
process.on('message', msg => console.log(msg));
process.send('child process');
