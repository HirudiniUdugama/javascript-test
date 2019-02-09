var jhon={
    name:'I anm jhon',
    age:90,
    isActive:true
}

var marry={
    name:'I anm marry',
    age:90,
    isActive:true
}
var sam={
    name:'I anm sam',
    age:90,
    isActive:false
}

let users =new Map()

users.set('jhon',jhon)
users.set('marry',marry)
users.set('sam',sam)

console.log(users)
console.log(users.size)
console.log(users.get('sam'))
console.log(users.keys())
console.log(users.values())


for(const value of users.values())
console.log(value.name)

for (const [key,value] of users.entries()){
    console.log(key+'='+value.name)
}

users.forEach((value,key)=>console.log(key+'='+value.name))

users.forEach((key,value)=>console.log(key+'='+value.name))


var arrOfArry=[['one','1'],['two','2'],['three','3'],]

var newMap=new Map(arrOfArry)
console.log(newMap)