let names = [`arvind`, `shyam`, `john`, `hane`];

let chars = names.map(function (name, index) {
    return name.charAt(0) + name.charAt(1);
});

console.log(names);
console.log(chars);

chars = names.map(name => name.charAt(0) + name.charAt(1));
console.log(names);
console.log(chars);

let index = names.findIndex(function (value, name) {
    return value == `axe`
});

console.log(index);

index = names.findIndex(value => value =='arvind');
console.log(index);