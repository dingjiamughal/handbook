import { randomNum } from '../utils';

/**
 * 初始化html
 *
 * @param {string}} template 模板html
 * @param {object} state proxy 状态
 * @returns template
 */

export const statePool = [];

let index = 0;

export function stateFormat(template, state) {
  console.log(template, state);

  let _state = {};

  template = template.replace(/<.+?>\{\{(.+?)\}\}<\/.+?>/g, (node, key) => {
    const tagName = node.match(/\<(.+?)\>/)[1];
    const flag = randomNum();

    _state.flag = flag;
    statePool.push(_state);
    _state = {};

    return `<${tagName} data-v='${flag}'>{{${key}}}</${tagName}>`;
  });

  console.log(template, 'template1');

  template = template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    let variables = state;
    const stateArr = key.trim().split('.'); // [state, count]

    let i = 0;
    while (i < stateArr.length) {
      variables = variables[stateArr[i]];

      i++;
    }

    statePool[index].state = stateArr;
    index++;

    return variables;
  });

  console.log(statePool);

  return template;
}
