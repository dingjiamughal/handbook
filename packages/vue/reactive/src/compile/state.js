import { randomNum } from '../utils';

/**
 * 初始化html
 *
 * @param {string}} template 模板html
 * @param {object} state proxy 状态
 * @returns template
 */

export const statePool = [];
export function stateFormat(template, state) {
  console.log(template, state);

  const _state = {};
  template = template.replace(/<.+?>\{\{(.+?)\}\}<\/.+?>/g, (node, key) => {
    const tagName = node.match(/\<(.+?)\>/)[1];
    const flag = randomNum();

    _state.flag = flag;

    return `<${tagName} data-dom='${flag}'>{{${key}}}</${tagName}>`;
  });

  console.log(template, 'template1');

  template = template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    let variables = key.trim();
    const stateArr = key.trim().split('.'); // [state, count]

    let i = 0;
    while (i < stateArr.length) {
      variables = state[stateArr[i]];

      i++;
    }

    _state.state = stateArr;
    statePool.push(_state);

    return variables;
  });

  console.log(statePool);

  return template;
}
