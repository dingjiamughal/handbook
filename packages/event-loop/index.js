function demo1() {
  setTimeout(() => console.log(1), 20);
  setTimeout(() => console.log(2), 10);

  console.log(3);
  for (let i = 0; i < 99999999; i++) {}
  console.log(4);

  setTimeout(() => console.log(5), 20);
  setTimeout(() => console.log(6), 10);
}
// demo1();

// 依次进入任务队列
// 耗时任务之前，已加入队列的宏任务会立即执行
// 耗时任务结束，宏任务继续加入队列，然后执行
// output: 3 4 2 1 6 5

// async 改写成 promise
async function async() {
  console.log(1);
  // await async2();
  new Promise((resolve, reject) => {
    console.log(2.2);
    resolve();
  }).then(() => {
    console.log(2);
  });
}

async function demo2() {
  async function async1() {
    console.log('A');
    await async2();
    console.log('B');
  }

  async function async2() {
    console.log('C');
  }

  console.log('D');
  setTimeout(() => console.log('E'), 0);
  async1();
  new Promise((resolve, reject) => {
    console.log('F');
    resolve();
  }).then(() => console.log('G'));
  console.log('H');
}

demo2();
// D A C F H B G E
