function Parent() {
    this.name = 'parent';
}

function Child() {
    Parent.call(this); // this 还是自生的
}

Child.prototype = Parent.prototype;
