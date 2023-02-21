# 读《函数式编程指北》有感

函数式编程提高代码质量和逻辑思维

### oo 和 functional

```js
class Calc {
    constructor(n) {
        this.num = n;
    }

    add(other) {
        this.num += other.num;
        return this;
    }

    multi(other) {
        this.num = this.num * other.num;
        return this;
    }
}

const a = new Calc(4);
const b = new Calc(2);
const c = new Calc(0);

const result = a.add(c).multi(b).add(a.multi(b)).num; // 32
```

上面 oo 的方式很乱，而且答案是错的，因为代码执行完成，产生了一次引用复制  
希望是得到 `(4 + 0) * 2 + 4 * 2 = 16`，使用函数的方式：

```js
const add = (a, b) => a + b;
const multi = (a, b) => a * b;

const a = 4;
const b = 2;
const c = 0;

const result = add(multi(b, add(a, c)), multi(a, b)); // 16
```

上面的例子，不代表这么写就是好的，多层嵌套的可读性很差，一定是可以优化的

### 一些准则

不必要的包裹函数

```js
httpGet('/post/2', json => renderPost(json));
httpGet('/post/2', (json, err) => renderPost(json, err));

httpGet('/post/2', renderPost);
```

更加通用的命名

```js
// 不通用，仅用于article
const validArticles = articles => articles.filter(article => article !== null && article !== undefined);

// 通用
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```

### 纯函数

1. 缓存函数 memo

React.memo

```js
// {
//     [p1, p2]: fn1,
//     [p3]: fn2,
//     [p4, p5, p6]: fn3
// }
const memoize = function (fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        cache[key] = cache[key] || fn.apply(fn, args);

        return cache[key];
    };
};
```

上面是书中的 demo，一个很简陋的 memo 函数，仅便于理解

```js
const pureHttpCall = memoize(function (url, params) {
    return function () {
        return $.getJSON(url, params);
    };
});

const load = pureHttpCall(1, 2);
load();
```

2. 可移植 Portal

仅从纯函数
代码为例

```js
// --- 不纯 ---
const signUp = attrs => {
    saveUser(attrs);
    welcomeUser(user);
};

const saveUser = attrs => {
    Db.save(attrs);
};

const welcomeUser = user => {
    Email(user);
};

// --- 纯 ---
const signUp = (Db, Email, attrs) => {
    return () => {
        saveUser(Db, attrs);
        welcomeUser(Email, user);
    };
};

const saveUser = (Db, attrs) => {};
const welcomeUser = (Email, user) => {};
```

### 一些纯函数的工具函数

1. 柯里化 curry

实现思路：不停递归，往第一个参数 push 后面来的参数，每次递归判断参数长度，来决定是否执行函数

```js
const curried = curry(fn);
fn = (a, b, c) => {};

curried(1)(2)(3);
```

思想是可以得到新函数，虽然统一入参，输出了一个新的 function 但也属于纯函数，灵活度比较高，至于想干什么，能干什么，交给开发者
应用场景

```js
const match = curry(function (what, str) {
    return str.match(what);
});
const filter = curry(function (fn, arr) {
    return arr.filter(fn);
});

const hasSpaces = match(/\s+/g);

// 在可复用 match 的同时 赋予能力：filter 中执行 match
filter(hasSpaces, ['tori_spelling', 'tori amos']);
```

2. 组合函数 compose

组合函数就是把一个个函数组合起来，用法：

```js
// 常规套娃
fn1(fn2(fn3));

// compose
compose(fn1, fn2, fn3, ...);
```

好处是看着舒服，也是我认为的唯一的好处  
如果我作为开发者，`compose` 让我很乐意去拆解功能，因为功能删减往往只需要改局部（前提是对功能比较熟）

`compose` 和 `curry` 是一对好组合，从用法倒推功能就是，fn3 --返回值--> fn2 --返回值--> fn1 --> 最终结果  
然而未必每次都那么巧（所有 fn 都只接收一个参数？）可能会这样 `fn2(fn3的返回值, p1, p2, p3)`

```js
// 假如 fn2 是多个入参的 case
const fn2 = (fn3ReturnValue, a, b, c) => {
    console.log(fn3ReturnValue, a, b, c);
};

// 理想状态下满足我的需求 compose(fn1, (a, b, c) => fn2(fn3的返回值, a, b, c), fn3)
// 结合 curry
const fn2_curried = curry((fn3ReturnValue, a, b, c) => {
    console.log(fn3ReturnValue, a, b, c);
});
compose(fn1, fn2_curried('a', 'b', 'c'), fn3);
```

应用场景

```js
const dasherize = compose(join('-'), map(toLower), split(' '));

dasherize('The world is a vampire'); // the-world-is-a-vampire
```

我个人比较推荐使用这种 `compose + curry` 的编写方式  
如果使用 lodash，可以使用 lodash/fp 模块，转为 curry 函数

### 命令式 & 声明式

```js
// 命令式 - 先声明一个数组，再往里push
const makes = [];
for (i = 0; i < cars.length; i++) {
    makes.push(cars[i].make);
}

// 声明式 - 不体现步骤，直接表明要做什么
const makes = cars.map(car => car.make);

// 命令式
const authenticate = function (form) {
    const user = toUser(form);
    return logIn(user);
};

// 声明式
const authenticate = compose(logIn, toUser);
```

书中对于声明式的 demo，每一步都有含义

```js
var mediaUrl = _.compose(_.prop('m'), _.prop('media')); // 相当于 m.media

var mediaToImg = _.compose(img, mediaUrl); // var img = src => $('<img />', {src});

var images = _.compose(_.map(mediaToImg), _.prop('items'));

var renderImages = _.compose(Impure.setHtml('body'), images);

var app = _.compose(Impure.getJSON(renderImages), url);
```

### 容器 & 函子 functor

背景：  
我们已经知道如何书写函数式的程序了，即通过管道把数据在一系列纯函数间传递的程序。我们也知道了，这些程序就是声明式的行为规范。  
但是，控制流（control flow）、异常处理（error handling）、异步操作（asynchronous actions）和状态（state）呢？还有更棘手的作用（effects）呢？本章将对上述这些抽象概念赖以建立的基础作一番探究。
函子是处理不纯的内容

```js
// 容器：Container + 一个值
var Container = function (x) {
    this.__value = x;
};

Container.of = function (x) {
    return new Container(x);
};

// 使用
Container.of('hotdogs'); // Container("hotdogs")
```

函子在容器基础上赋予方法，目的让其他函数来操作函子

```js
Container.prototype.map = function (fn) {
    return Container.of(fn(this.__value));
};

Container.of(2).map(num => num + 2);
```

为什么要这么用的解释，戳 https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch8.html#%E7%AC%AC%E4%B8%80%E4%B8%AA-functor 句句到位  
利用这个特性，可以实现链式 map

```js
Container.of(2)
    .map(num => num + 2)
    .map(num => num * 4);
```

map vs 函数组合

```js
compose(step1, step1, step3, ...);

Container.of(formData).map(step1).map(step2).map(step3);
```

### maybe 函子

```js
Container.of({a: 1})
    .map(formData => undefined)
    .map(formData => ({b: formData.a + 1}));
```

这种情况会报错，maybe 函子就是做这个 hack

```js
Maybe.prototype.isNothing = function () {
    return this.__value === null || this.__value === undefined;
};
Maybe.prototype.map = function (fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.__value));
};
```

### either 函子

`maybe` 适用于空值的拦截，如果有异常，比如后端定义返回 `0` 代表成功，`1` 代表异常，我们要根据返回值自定义错误信息，可以使用 `either`

```js
// Left 不做处理，返回传入 of 的值
var Left = function (x) {
    this.__value = x;
};

Left.of = function (x) {
    return new Left(x);
};

Left.prototype.map = function (fn) {
    return this;
};

// Right 执行回调函数
var Right = function (x) {
    this.__value = x;
};

Right.of = function (x) {
    return new Right(x);
};

Right.prototype.map = function (fn) {
    return Right.of(fn(this.__value));
};
```

结合 `either`

```js
var moment = require('moment');

//  getAge :: Date -> User -> Either(String, Number)
var getAge = curry(function (now, user) {
    var birthdate = moment(user.birthdate, 'YYYY-MM-DD');
    if (!birthdate.isValid()) {
        return Left.of('Birth date could not be parsed');
    }

    return Right.of(now.diff(birthdate, 'years'));
});

getAge(moment(), {birthdate: '2005-12-12'}); // Right(9)

getAge(moment(), {birthdate: 'balloons!'}); // Left("Birth date could not be parsed")
```

### IO 函子

之前的函子接收是一个值，io 的函子接收一个函数，但是这个接收的函数不一定是纯函数，io 就是把这个函数存起来，交给调用者。这样函子就有处理不纯函数的能力了

```js
var IO = function (fn) {
    this.__value = fn;
};

IO.of = function (x) {
    return new IO(function () {
        return x;
    });
};

IO.prototype.map = function (fn) {
    return new IO(_.compose(fn, this.__value));
};
```

TODO:

### Task 函子
