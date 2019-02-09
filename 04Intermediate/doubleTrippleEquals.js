let x=''
let y=''

console.log(x==y) //true
console.log(x===y) //true

let A='a'
let B='a'

console.log(A==B) //true
console.log(A===B) //true


let C='a'
let D='b'

console.log(C==D) //false
console.log(C===D) //false

let E={}
let F={}

console.log(E==F) //false
console.log(E===F) //false

let G={x}
let H=G

console.log(G==H)   //true
console.log(G===H)  //true