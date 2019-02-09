const ass=[
    {
        title:'A',
        isDone:true,
    },{
        title:'B',
        isDone:false,
    },{
        title:'C',
        isDone:true,
    },{
        title:'D',
        isDone:false,
    },{
        title:'E',
        isDone:true,
    },{
        title:'F',
        isDone:false,
    }
]

// let printtitle= ass.filter((ass)=>ass.isDone===true)
let print = function(ass){
    if(ass.isDone==true){
    return ass.title}
}
console.log(print(this.ass))