class EventEmitter {
    constructor() {
        this.handlers = {};
    }

    on(eventName, callback) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(callback);
    }

    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(callback => callback(args));
        }
    }

    off(eventName, callback) {
        const index = this.handlers[eventName].indexOf(callback);

        if (index !== -1) {
            this.handlers[eventName].splice(index, 1);
        }
    }

    once(eventName, callback) {
        this.on(eventName, function wrapper(...args) {
            callback.apply(...args);
            this.off(eventName, wrapper); // 用完就删
        });
    }
}

class EventEmitter2 {
    handlers = {};

    on(name, cb) {
        if (!this.handlers[name]) {
            this.handlers[name] = [];
        }

        this.handlers[name].push(cb);
    }

    emit(name, ...payload) {
        this.handlers[name] &&
            this.handlers[name].forEach(cbs => {
                cbs(payload);
            });
    }

    off(name, cb) {
        const index = this.handlers[name].indexOf(cb);

        if (!index) {
            this.handlers[name].splice(index, 1);
        }
    }

    once(name, cb) {
        this.on(name, function setup(...args) {
            cb.apply(...args);

            this.off(name, setup);
        });
    }
}

const mt = new EventEmitter2();

const m1 = () => console.log(1);
const m2 = () => console.log(2);
const m3 = () => console.log(3);
const m4 = () => console.log(4);

mt.on('change', m1);
mt.on('change', m2);
mt.on('kkk', p => console.log(p));
mt.on('change', m3);
mt.on('change', m4);

mt.emit('change', 'dingjia');
mt.emit('kkk', 'kaka');
