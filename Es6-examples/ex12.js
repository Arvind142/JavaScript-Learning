let p1 = {
    name: 'John',
    age: 20,
    email: 'valkayiri@gmail.com',
    country: 'USA',
    city: 'New York'
};


function sayHello({name, city}){ 
    // object is desctructed to return these vars to method
    console.log(`Hello ${name}, how is weather in ${city}`);
};

sayHello(p1);