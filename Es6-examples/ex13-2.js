function divide(a, b, callback) {
    if (typeof callback !== 'function') {
        throw 'call back must be supplied and must be a function';
    }
    setTimeout(() => {
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
    }, 0);
    callback(null, a / b);
};

//asynchronous way of script execution
console.log('start of script');
let a = 10, b = 6;
divide(a, b, (err, result) => {
    if(err){
        console.log('The error was : ',err);
    }
    else{
        console.log('The result is : ',result);
    }
}
);
console.log('stop of script');