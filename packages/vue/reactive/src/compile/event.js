import { randomNum } from '../utils';

// eventPool = [
//     {
//         flag: 随机数,
//         handler: eventHandler,
//         type: click...
//     }
// ]
const eventPool = [];

/**
 * 模板编译
 * @param {string} template 模板
 * @returns
 */
export function eventFormat(template) {
  return template.replace(/onClick\=\"(.*?)\"/g, (node, key) => {
    console.log(node, key);

    const flag = randomNum();

    eventPool.push({
      flag,
      handler: key.trim(), // add(2)
      type: 'click'
    });

    return `data-v=${flag}`;
  });
}

/**
 * 时间处理函数，解析 methods
 * methods: { add, minus }
 *
 * @param {*} methods
 */
export function bindEvent(methods) {
  const allElements = document.getElementsByTagName('*');

  eventPool.forEach(event => {
    const elementWithEvent = [...allElements].find(element => {
      if (event.flag === +element.dataset.v) {
        return element;
      }
      return null;
    });

    if (elementWithEvent) {
      elementWithEvent.addEventListener(
        event.type,
        function () {
          const fnName = event.handler.match(/^(.*?)\(/)[1]; // add
          const args = event.handler.match(/\((.*?)\)/)[1]; // 2

          console.log(args);

          // args 的类型需要判断，如果 arg 是 Number(2)，传入的是 String(2)，那么计算势必会出现 2 + 2 = 22
          // includes string

          methods[fnName](transformArgs(args));
        },
        false
      );
    }
  });
}

function transformArgs(args) {
  // 如果是 string 去掉引号
  if (/^['|"].+?['|"]$/.test(args)) {
    return args.replace(/['|"]/g, '');
  }

  // boolean
  switch (args) {
    case 'true':
      return true;
    case 'false':
      return false;
  }

  // number
  return Number(args);
}
