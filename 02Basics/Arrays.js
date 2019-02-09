let myArray=['A','B','C','D']

console.log(myArray);

console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray.length);
console.log([myArray.length]); //snakyathmaka agaya gannawa
console.log([myArray.length - 2]);
console.log(myArray[myArray.length - 2]); // myArray[2]=C

console.log(`I have ${myArray.length} letters` )



//special

const numbers=['one','two','three','four','five','six']

numbers[1]='othernum' //replace two with othernum
console.log(numbers)

numbers.shift() //mulin ekak remove wenwa
console.log(numbers)

numbers.unshift('unshiftnum') //yawana num eka mulata ekathu wenwa
console.log(numbers)

numbers.pop() //agin no ekak iwath karanwa
//console.log('deleted element is '+ numbers.pop())
console.log(numbers)

numbers.push('seven') //pitipassta yawana no eka push wenwa
console.log(numbers)

numbers.splice(2,2,'somthing') // 2ni element eken pata aragena ,element 2k delete karala,3niyata thiyena agaya daanna
console.log(numbers)