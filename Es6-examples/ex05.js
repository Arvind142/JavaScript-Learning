// named function   - name functions can be placed anywhere 
//in file it will be loaded first before script execution
function hello() {
    return `Hello World`;
}
let s1 = hello();
console.log(s1);


//annonymous function and should be before script execution
let greet = function () {
    return `Hello World!`;
}
let s2 = greet();
console.log(s2);



//loop to run same function after given interval
// setInterval(
//     function () {
//         console.log('welcome to REACTJS course');
//     },
//     2000
// );


//ES6 arrow function


// example -1
// setInterval(()=>{
//     console.log('welcome to REACTJS course');
// },1000)

//example 2 since it is an single line we can write it as it is
setInterval(()=> console.log('welcome to REACTJS course'),1000)