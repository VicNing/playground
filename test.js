function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor:Person,
    getName:function() {
        return this.name;
    }
};

let a = new Person('ning');
console.log(Object(a));
