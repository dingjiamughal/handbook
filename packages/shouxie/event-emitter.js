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
