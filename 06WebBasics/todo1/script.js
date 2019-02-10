// alert('hello!')

// var h=document.createElement('h1')
// var myValue=document.createTextNode('Hello World')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


// var val = 5;

// while (val > 0) {

//     console.log(val)
//     val--
// }


function addItem(){
    var input = document.getElementById('input');
    var item= input.nodeValue;
    ul=document.getElementById('list')
    var textNode=document.createTextNode(item);

    if(item===''){
        return false;
    }else{
        li=document.createElement('li');
        var checkbox= document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')

        var labal=document.createElement('labal')
        labal.setAttribute('for','item')


        ul.appedChild(labal)
        li.appedChild(checkbox)
        labal.appendChild(textNode)
        li.appedChild(labal)
        ul.insertBefore(li,ul.childNodes[0])
        li.className='visual'
    }
}