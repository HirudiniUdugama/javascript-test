const myTodos=[]

myTodos.push('activity one')

myTodos.push('activity two')

myTodos.push('activity three')

console.log(myTodos)

myTodos.forEach(function(todo,index){
    console.log(`no ${index+1} is : ${todo} `)
}
)