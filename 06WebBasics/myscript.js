// alert('file is attached')

const myPelements=document.querySelector('p')
console.log(myPelements);
myPelements.textContent='I am being change using js'


const myPelements2=document.querySelectorAll('p')

myPelements2.forEach(function(p){
    p.textContent='I am changed using loop in js'
})

myPelements2.forEach((p)=> 'I am changed using loop in js')