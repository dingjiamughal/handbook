const { transformSync } = require('@babel/core');

const code = `
    console.log('hello');

    if (isDev) {
        const a = 1;
        const b = 2;
        console.log(a + b);
    }
`;

const babelConfig = {
  plugins: [
    [
      './index.js',
      {
        isRemove: true
      }
    ]
  ]
};

const output = transformSync(code, babelConfig);
console.log(output.code);
