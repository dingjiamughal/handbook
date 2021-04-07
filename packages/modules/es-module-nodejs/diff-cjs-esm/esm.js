// 下面几个成员都不支持

// console.log(require);
// console.log(module);
// console.log(exports);
// console.log(__filename);
// console.log(__dirname);

// 取代方式：
// import
// export default

import url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
