// 普通的 compose 函数
// const compose = (...[first, ...rest]) => (...args) => rest.reduce((memo, next) => next(memo), first(...args)); // prettier-ignore

// const add = (a, b) => a + b;
// const square = a => a * a;
// console.log(compose(add, square, square)(1, 2));

// 洋葱圈模型下的 compose 函数
export const onionCompose = middlewares => {
  return function () {
    return dispatch(0);

    function dispatch(i) {
      let fn = middlewares[i];

      if (!fn) {
        return Promise.resolve();
      }

      return Promise.resolve(
        //  next 执行下一个函数
        fn(function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
};

async function fn1(next) {
  console.log('fn1');
  await next();

  console.log('fn1 end');
}

async function fn2(next) {
  console.log('fn2');
  await sleep(1000);
  await next();

  console.log('fn2 end');
}

function fn3() {
  console.log('fn3');
}

function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

onionCompose([fn1, fn2, fn3])();
