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
export default function eventFormat(template) {
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
 * 解析 methods
 * methods: { m1, m2, m3 }
 *
 * @param {*} methods
 */
export function bindEvent(methods) {
  console.log(methods);
  const allElements = document.getElementsByTagName('*');

  eventPool.forEach(evnet => {
    [...allElements].forEach(element => {
      const flag = parseInt(element.dataSet.v);

      if (event.flag === flag) {
        element.addEventListener(type, function () {}, false);
      }
    });
  });
}
