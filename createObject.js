//工厂模式
function createFooFactory(name, age) {
    let o = {};
    o.name = name;
    o.age = age;
    o.getName = function() {
        return this.name;
    }
    return o;
}

//构造函数模式
function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
}

let fooA = new Foo('ning', 25);
console.log(FooA.constructor); //Foo
console.log(FooA instanceOf Foo); //true

//原型模式
function Foo2() {

}
Foo2.prototype = {
    constructor: Foo2,
    name: 'ning',
    age: 25,
    getName: function() {
        return this.name;
    }
};

//混合模式
function Foo3(name, age) {
    this.name = name;
    this.age = age;
}
Foo3.prototype = {
    getName: function() {
        return this.name;
    }
};

//动态模式
function Foo4(name, age) {
    this.name = name;
    this.age = age;
    if (typeof this.getName !== 'function') {
        this.prototype.getName = function() {
            return this.name;
        }
    }
}

//寄生模式
function Foo5(name, age) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.getName = function() {
        return this.name;
    }
    return o;
}

let instance = new Foo5('haha', 20);

//稳妥模式
function Foo6(name, age) {
    let o = new Object();
    o.getName = function() {
        return name;
    }
    return o;
}

let instance = Foo6('bing', 18);
