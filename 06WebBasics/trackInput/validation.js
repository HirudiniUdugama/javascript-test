function myValidation(name){
    let myValue=document.getElementById('form').value;

    if(isNaN(myValue)|| myValue<1 || myValue>20){
console.log('Not a valid input');

    }else{
        console.log('ok')
    }
}

//form validation

document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    event.target.username.value='';
})