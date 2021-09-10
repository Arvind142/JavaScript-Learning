//strings initialized
var carcolor='blue';
var carcolor1='Red';
var carcolor2='Black';
var carcolor3='Voilet';
//-----------------------------------------variable value override-----------------------------------------

console.log(carcolor);
var carcolor='OrangeX'; // will created carcolor and won't throw error
console.log(carcolor);
carcolor='YelloYX'; // will override value present in carcolor variable
console.log(carcolor);
//entering number in String variable, it works fine
carcolor=7;
console.log(carcolor);


//PS: in javaScript initialization works with/without var keyword

//-----------------------------------------length-----------------------------------------

//we get length of string
console.log(carcolor2.length);

//we get undefined for boolean
console.log(true.length);

//we get undefined for number
console.log(carcolor.length);

//-----------------------------------------indexOf-----------------------------------------
//to use find like feature we will use .indexOf('character_you_want_to_search_for')
var sen='I love pizza, tf?! i myself don\'t know XD';
console.log(sen.indexOf('pizza'));

//returns first index of first character starting from left
console.log(sen.indexOf('i'));

// when we give incorrect char, returns -1 whenvalue not found
console.log(sen.indexOf('x'));

//-----------------------------------------slice(substring)-----------------------------------------
var sent='Naya Word';
console.log(sent);

// implies return string from 6th index start < value =(last Char)
console.log(sent.slice(5));

// takes start and end index and returns value start < value <= endIndex
console.log(sent.slice(5,7));

// if end index is less than start index, method return empty string
console.log(sent.slice(5,3));

// if start index is greated than length of string then too method return empty string
console.log(sent.slice(100));

// if start index is correct and end index is greated than length of string then method return value till last char of that String
console.log(sent.slice(5,200));
