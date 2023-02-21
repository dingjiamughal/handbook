import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImport from 'vite-plugin-babel-import';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginImport([
            {
                libraryName: '@baidu/vcl-charts-fe',
                libraryDirectory: 'esm/component/element',
                // customName: (name, file) => {
                //   // console.log(name, file.opts.filename);
                //   if (name === 'module1') {
                //     console.log(file);
                //     return '@baidu/vcl-charts-fe/esm/component/element/module1/style';
                //   }
                // },
                style: (name: string, file: Object) => {
                    console.log(name, 'hahah');

                    // return name;
                    if (name.includes('module1')) {
                        return `${name}/style/index.css`;
                    }
                    if (name.includes('module2')) {
                        return `${name}/style/index.css`;
                    }
                    return false;
                    // console.log(name);
                    // try {
                    //   if (name.includes('module1')) {
                    //     return '@baidu/vcl-charts-fe/esm/component/element/module1/style';
                    //   }
                    //   if (name.includes('module2')) {
                    //     return '@baidu/vcl-charts-fe/esm/component/element/module2/style';
                    //   }

                    //   return false;
                    // } catch (e) {
                    //   return false;
                    // }

                    // if (name === '@baidu/vcl-charts-fe/esm/component/card' || name === '@baidu/vcl-charts-fe/esm/component/other') {
                    //   return false;
                    // }
                    // return `${name}/style/2x`;
                }
            }
        ])
    ]
});
