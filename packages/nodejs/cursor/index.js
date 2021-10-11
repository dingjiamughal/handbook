// const tty = require('tty');
// const rl = require('readline');
// const ttys = require('ttys');

// ttys.stdout.write('hello  world!\n');
// ttys.stdout.write('\033[1A');
// ttys.stdout.write('dingjia\n');

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function ask(question) {
//   return new Promise((resolve, reject) => {
//     rl.question(question, answer => {
//       resolve(answer);

//       rl.close();
//     });
//   });
// }

// (async function run() {
//   console.log(await ask('What do you think of Node.js? '));
// })();

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

async function getChar() {
  return new Promise(resolve => {
    process.stdin.on('data', key => resolve(key));
  });
}

function up(n = 1) {
  process.stdout.write('\033[' + n + 'A');
}
function down(n = 1) {
  process.stdout.write('\033[' + n + 'B');
}
function right(n = 1) {
  process.stdout.write('\033[' + n + 'C');
}
function left(n = 1) {
  process.stdout.write('\033[' + n + 'D');
}

async function selected(choices) {
  let selected = 0;

  for (let i = 0; i < choices.length; i++) {
    if (i === 0) {
      process.stdout.write(`[x] ${choices[i]}\n`);
    } else {
      process.stdout.write(`[ ] ${choices[i]}\n`);
    }
  }

  up(choices.length);
  right();

  while (true) {
    const char = await getChar();

    if (char === '\u0003') {
      process.exit();
      break;
    }

    if (char === 'w' && selected > 0) {
      process.stdout.write(' ');
      left();
      up();
      process.stdout.write('x');
      left();

      selected--;
    }

    if (char === 's' && selected < choices.length - 1) {
      process.stdout.write(' ');
      left();
      down();
      process.stdout.write('x');
      left();

      selected++;
    }

    if (char === '\r') {
      down(choices.length - selected);
      left();
      return choices[selected];
    }
  }
}

(async function () {
  const answer = await selected(['vue', 'react', 'angular']);
  process.stdout.write('your answers: ' + answer + '\n');

  process.exit();
})();
