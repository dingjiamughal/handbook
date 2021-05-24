const cp = require('child_process');
const path = require('path');

const child = cp.fork(path.resolve(__dirname, './child.js'));

child.on('message', msg => console.log(msg));
child.send('main process 3333');
console.log(process.pid);
