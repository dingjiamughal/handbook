/**
 * M3 的 demo 里实现了 exit + 重启 worker 的过程，我就写点注释吧
 *
 * 利用 process.send 和 worker.send 完成父子进程通信
 * worker 中 process.exit 模拟进程退出
 * worker.on(exit, () => {}) 监听 worker 退出，立即 cp.fork 重启子进程
 */

const childProcess = require('child_process');
const net = require('net');

// 获取cpu的数量
const cpuNum = require('os').cpus().length; // 8核，qps=8

let workers = [];
let cur = 0;

for (let i = 0; i < cpuNum; ++i) {
  workers.push(childProcess.fork('./worker.js'));
  console.log('worker process-' + workers[i].pid);

  // 监听 worker exit
  workers[i].on(
    'exit',
    (i => {
      return () => {
        console.log('!!!!!!!! worker-' + workers[i].pid + ' exited');
        // 重启
        workers[i] = childProcess.fork('./worker.js');
        console.log('>>>>> Create worker-' + workers[i].pid);
      };
    })(i)
  );
}

// 创建TCP服务器
const tcpServer = net.createServer();

/*
 服务器收到请求后分发给工作进程去处理
*/
tcpServer
  .on('connection', socket => {
    //用法二：发送socket给worker，socket发送过去了，连接转给了worker
    console.log('New Connection>>');
    // 和 worker 通信
    workers[cur].send('socket', socket);
    // 指针 + 1
    cur = Number.parseInt((cur + 1) % cpuNum);
  })
  .on('error', err => {
    throw err;
  });

tcpServer.listen(8989, () => {
  console.log('Tcp Server: 127.0.0.8989');
});
