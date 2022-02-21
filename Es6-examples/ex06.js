let names = [`arvind`, `shyam`, `john`, `hane`];

let chars = names.map(function (name, index) {
    return name.charAt(0) + name.charAt(1);
});

console.log(names);
console.log(chars);