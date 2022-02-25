let p1 = {
    name: 'John',
    age: 20,
    email: 'arvx@gmail.com'
}

let {name,email,country}=p1
console.log(name)
console.log(email)
console.log(country)


let nums = [10,20,33,49,53];// array 
let [n1,n2 ,...restnums]=nums // to vars copyign data from array 
console.log(n1) // 10
console.log(n2) // 20
console.log(nums) // [10, 20, 33, 49, 53]
console.log(restnums) // [33, 49, 53]