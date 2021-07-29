const cp = require('child_process');
const chokidar = require('chokidar');

let childProcess;

chokidar.watch(['test.js']).on('all', (event, path) => {
  debounce(restart, 500);
});

function restart() {
  childProcess && childProcess.kill();
  childProcess = cp.spawn('node', ['test.js'], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });
}

function debounce(fn, delay) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn, delay);
  };
}
