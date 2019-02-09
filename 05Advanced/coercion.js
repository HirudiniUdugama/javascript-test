const giveType=typeof 4 //number

console.log(giveType)

const adder=5+true
console.log(adder)//6

const adder2=5+false
console.log(adder2)//5



//values that consider as false
// false
// 0
// ''
// null
// undefined


const loginDetails=['','xx','xy']

const loginID=loginDetails[0]

if(loginID){
    console.log('Allow')
}else{
    console.log('failed')
}