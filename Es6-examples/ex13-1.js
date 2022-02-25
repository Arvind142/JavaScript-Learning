function divide(a, b) {

    if (typeof a !== 'number') {
        callback('first Argument is not number');
    }
    if (typeof b !== 'number') {
        callback('second Argument is not number');
    }
    if (a === 0) {
        callback('cannot divied by zero');
    }
    return a / b;
};


//synchonized way fo script execution
// everythig is executed in order
// function signature function divide(a, b)
console.log('start of script');
let a = 10, b = 6;
let c = divide(a, b);
console.log(c);
console.log('stop of script');