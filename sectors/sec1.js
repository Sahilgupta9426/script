console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/




let element=document.getElementById('myfirst');
// console.log(element);
// console.log(element.className);
// console.log(element.childNodes);
// console.log(element.parentNode);
element.style.color='red';
element.innerText='sahil gupta';
// element.innerHTML='<b>its me</b>';
// console.log(element.innerHTML);



// let sel=document.querySelector('.child');
// sel=document.querySelector('h1');
// sel=document.querySelector('div');
// console.log(sel);


//2.multiple selectors
let elem= document.getElementsByClassName('child');
// console.log(elem[0]);
// elem=document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child'))
// elem=document.getElementsByTagName('div')
// console.log(elem)
// Array.from(elem).forEach(elements =>{
//     console.log(elements);
// });



// for (let index = 0; index < elem.length; index++) {
//     const element = elem[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }