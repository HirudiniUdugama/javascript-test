const days=['a','b','c','d','e','f',]


//method one

// let sayHello=function(){
//     console.log("greeting ")
// }

// days.forEach(sayHello)



//method two

// days.forEach(function(){
//     console.log("greeting ")
// })

//method three

days.forEach(function(element){
    console.log("greeting " + element)
})

//method four

days.forEach(function(element,index){
    console.log("greeting " + element + (index+1))
})