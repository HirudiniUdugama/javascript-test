let myMarks=function(current,total){

gpa=(current/total)*100

if(gpa>=90){
    return 'A'
}else if (gpa>=80){
    return 'B'
}
else if (gpa>=70){
    return 'C'
}
else if (gpa>=60){
    return 'D'
}
else if (gpa>=50){
    return 'E'
}
else{
    return 'F'
}



}

console.log('Your mark is '+ myMarks(90,100))