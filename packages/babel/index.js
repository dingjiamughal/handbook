module.exports = ({ types: t }) => {
  return {
    visitor: {
      // 标识符，dfs
      Identifier(path) {
        const isDev = path.node.name === 'isDev';
        const parentIsIf = t.isIfStatement(path.parentPath);

        console.log(isDev, parentIsIf);

        if (isDev && parentIsIf) {
          // 把 isDev 转化为 "isDev"
          const stringNode = t.stringLiteral('isDev');
          path.replaceWith(stringNode);
        }
      },

      StringLiteral(path, opts) {
        console.log(opts);
        const isDev = path.node.value === 'isDev';
        const parentIsIf = t.isIfStatement(path.parentPath);

        if (isDev && parentIsIf) {
          // prod 环境下，把一整个 if 都删了
          path.parentPath.remove();
        }
      }
    }
  };
};
