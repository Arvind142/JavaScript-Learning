// promise based asynchroneous function

function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number') {
            reject('first Argument is not number');
        }
        if (typeof b !== 'number') {
            reject('second Argument is not number');
        }
        if (a === 0) {
            reject('cannot divied by zero');
        }
        resolve(a / b);

    });

};


//synchonized way fo script execution
// everythig is executed in order
// function signature function divide(a, b)

//asynchronous way of script execution
// function print 
console.log('start of script');
let a = 12, b = 2;
let result = divide(a, b);

// traditional way of script
result.then(result => console.log("result : ", result));
result.catch(result => console.log("error : ", result));

//alternative and quite great
divide(a, b)
    .then(result => console.log("result: ", result))
    .catch(result => console.log("error: ", result));

setTimeout( async () => {
    try {
        // async function
        let res = await divide(a, b);
        // if any if condition fails it will throw error
        console.log("result: ", res);
    }
    catch (err) {
        console.log("error: ", err);
    }
}, 0);

console.log('stop of script');