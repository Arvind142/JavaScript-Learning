let nums = [2,4,0,72,45,472,6,47,66,1]

let anotherNums=[100, 200, ...nums]

console.log(nums)
console.log(anotherNums)

//vars refering to same object
let nums2 = nums;
nums2.push(9999) // affect both as both are referring to same object
console.log(nums)
console.log(nums2)

// var nums2 is now having an copy on
// nums and both of them are
// pointing to diff objects
nums2 = [...nums];
nums2.push(9999) // it will only affect nums2 vars
console.log(nums)
console.log(nums2)


let p1 = {name: 'John', age: 20}
let p2 = {city: 'New York', ...p1, country :'india'}
console.log(p1)
console.log(p2)


let p3 = {...p1}
let p4 = p1
console.log(p3==p1)
console.log(p4==p1)