function test(){

    // var have valid lifecycle outside of function/block loop
    // where as let have valid lifecycle inside of function/block wher it was declared
    for(let i=1;i<=5;i++){
        console.log(i);
    }
    //console.log("outside of loop : ",i);
}
test();

const name = "Arivnd"
console.log(name);