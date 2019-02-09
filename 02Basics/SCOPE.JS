let Global='global'

if(true){
    let Local = 'Local'  //let
    global='superman'
    console.log(Global)
    console.log(Local)
}

// console.log(Local)  block eka athule nisa pitaidan acces na.
console.log(Global)



let Global2='global'

if(true){
    var Local2 = 'Local'  //var
    global2='superman'
    console.log(Global2)
    console.log(Local2)
}

 console.log(Local2)  // den access thiyenwa local varible eka block eka athule unath "var" nisa
console.log(Global2)