function extend(target) {
    if (arguments.length === 0) {
        return;
    }
    for (let i = 1; i < arguments.length; i++) {
        for (propertyName in arguments[i]) {
            target[propertyName] = arguments[i][propertyName];
        }
    }
}

let a = {};
extend(a, {
    name: 'ning',
    age: 20
}, {
    age: 18
}, {
    jason: 'asdasd'
});
console.log(a);
