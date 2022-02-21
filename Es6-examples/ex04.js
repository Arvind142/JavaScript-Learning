let name = `Arvind`;
let age = 18;

let s1 = `${name} si ${age} yrs old`; 
console.log(s1);

function myTag(string, ...values){
    // with parametername
    console.log('String',string);
    // console.log('p1',p1);
    // console.log('p2',p2);
    console.log(arguments); // print all args
    console.log(values); // print all args after values
    return `This is a sample output`;
}

let s2 =myTag`${name} si ${age} yrs old`; 
console.log(s2);