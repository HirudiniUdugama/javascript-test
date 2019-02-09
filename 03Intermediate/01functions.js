
//func 1
let sayHello=function(){
    console.log('say hello');
}

sayHello();

//func 2
let sayHello2=function(name){
    console.log('say hello '+ name);
    console.log(`say hello ${name}` );
}

sayHello2('ruwan');

//func 3
let plus=function(no1,no2){
    console.log(no1+no2)
}
plus(2,4)


//func 4
let adder=function(n1,n2){
    return n1+n2;
}
console.log(adder(4,5))

let result=adder(2,9)
console.log(result)


//func 5

let mul=function(num1,num2){
    return num1* num2;
}

console.log(mul(10,20))

//func 6

let mydetails=function(name='noname',age=10){
    return `my name is ${name} and my age is ${age}`
}
console.log(mydetails('ruwan',8))
