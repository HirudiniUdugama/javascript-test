// let sayHello= function(name){
//     return `Hi, ${name} !,How are you?`
// }

// console.log(sayHello("Ruwan"))



// let sayHello=(name) => {
//     return `Hi, ${name} !,How are you?`
// }

// console.log(sayHello("Ruwan"))



//arrou function
let sayHello=(name) => `Hi, ${name} !,How are you?`
console.log(sayHello("Ruwan"))


const todos=[{
    title:'getup',
    isDone:true,
},{
    title:'brush teeth',
    isDone:true,
},{
    title:'drink milk',
    isDone:false,
}]


// const thingsDone=todos.filter((todo)=>{
//     return todo.isDone===true;
// })



const thingsDone=todos.filter((todo)=>todo.isDone===true)

console.log(thingsDone)