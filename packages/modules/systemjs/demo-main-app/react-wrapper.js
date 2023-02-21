import {defineComponent, onBeforeUnmount, ref, watch} from '@vue/composition-api';
import {Component, createElement} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

// 仅支持props传值
export default loadComponent => {
    let component = () => null;
    return defineComponent({
        beforeRouteLeave: async function (_to, _from, next) {
            const simpleGuards = this.guards.filter(item => item.version === 1);
            for (const {blocker} of simpleGuards) {
                if (!(await blocker())) {
                    next(false);
                    return;
                }
            }
            next();
        },
        setup(_props, ctx) {
            const guards = [];
            console.log('aaaaaa');
            const blockNavigation = onNavigate => {
                const blocker = () =>
                    new Promise(resolve => {
                        onNavigate(to => resolve(to));
                    });
                const guard = {version: 1, blocker};

                guards.push(guard);

                return () => {
                    if (guards.includes(guard)) {
                        guards.splice(guards.indexOf(guard), 1);
                    }
                };
            };

            const root = ref();
            const loaded = ref(false);
            class Container extends Component {
                state = {
                    ...ctx.attrs,
                    blockNavigation
                };

                render() {
                    console.log(component, this.state);
                    return createElement(component, this.state, null);
                }
            }

            let instance = null;

            loadComponent().then(r => {
                component = r;
                loaded.value = true;
            });

            watch(
                () => [root.value, loaded.value],
                ([root, loaded]) => {
                    console.log(root, loaded);
                    if (root && loaded) {
                        console.log(root.value, loaded.value);

                        render(createElement(Container, {ref: ref => (instance = ref)}), root);
                    }
                },
                {immediate: true}
            );

            watch(
                () => ctx.attrs,
                () => {
                    if (instance) {
                        instance.setState(ctx.attrs);
                    }
                }
            );

            onBeforeUnmount(() => {
                console.log(12312312);
                if (root.value) {
                    unmountComponentAtNode(root.value);
                }
            });

            return {root, guards};
        },
        render(h) {
            return h('div', {ref: 'root'});
        }
    });
};

// import {defineComponent, ref, watch, onBeforeUnmount} from '@vue/composition-api';
// import {createElement, Component} from 'react';
// import {render, unmountComponentAtNode} from 'react-dom';

// /*! *****************************************************************************
// Copyright (c) Microsoft Corporation.

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.
// ***************************************************************************** */

// function __awaiter(thisArg, _arguments, P, generator) {
//     function adopt(value) {
//         return value instanceof P
//             ? value
//             : new P(function (resolve) {
//                   resolve(value);
//               });
//     }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) {
//             try {
//                 step(generator.next(value));
//             } catch (e) {
//                 reject(e);
//             }
//         }
//         function rejected(value) {
//             try {
//                 step(generator['throw'](value));
//             } catch (e) {
//                 reject(e);
//             }
//         }
//         function step(result) {
//             result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
//         }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// }

// // 仅支持props传值
// var reactWrapper = loadComponent => {
//     let component = () => null;
//     return defineComponent({
//         beforeRouteLeave: function (_to, _from, next) {
//             return __awaiter(this, void 0, void 0, function* () {
//                 const simpleGuards = this.guards.filter(item => item.version === 1);
//                 for (const {blocker} of simpleGuards) {
//                     if (!(yield blocker())) {
//                         next(false);
//                         return;
//                     }
//                 }
//                 next();
//             });
//         },
//         setup(_props, ctx) {
//             const guards = [];
//             const blockNavigation = onNavigate => {
//                 const blocker = () =>
//                     new Promise(resolve => {
//                         onNavigate(to => resolve(to));
//                     });
//                 const guard = {version: 1, blocker};
//                 guards.push(guard);
//                 return () => {
//                     if (guards.includes(guard)) {
//                         guards.splice(guards.indexOf(guard), 1);
//                     }
//                 };
//             };
//             const root = ref();
//             const loaded = ref(false);
//             class Container extends Component {
//                 constructor() {
//                     super(...arguments);
//                     this.state = Object.assign(Object.assign({}, ctx.attrs), {blockNavigation});
//                 }
//                 render() {
//                     return createElement(component, this.state, null);
//                 }
//             }
//             let instance = null;
//             loadComponent().then(r => {
//                 component = r;
//                 loaded.value = true;
//             });
//             watch(
//                 () => [root.value, loaded.value],
//                 ([root, loaded]) => {
//                     if (root && loaded) {
//                         render(createElement(Container, {ref: ref => (instance = ref)}), root);
//                     }
//                 },
//                 {immediate: true}
//             );
//             watch(
//                 () => ctx.attrs,
//                 () => {
//                     if (instance) {
//                         instance.setState(ctx.attrs);
//                     }
//                 }
//             );
//             onBeforeUnmount(() => {
//                 if (root.value) {
//                     unmountComponentAtNode(root.value);
//                 }
//             });
//             return {root, guards};
//         },
//         render(h) {
//             return h('div', {ref: 'root'});
//         }
//     });
// };

// export {reactWrapper};
