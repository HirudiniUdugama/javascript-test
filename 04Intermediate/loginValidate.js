let userEmail=''
let userPassword=''

let checkEmail=function(userEmail){
    if(userEmail.includes('!@#$%^&*()_1') && userEmail.length>8){
        return true
    }return false
}


console.log(checkEmail('!@#$%^&*()_!@#$%^&*()_')
)