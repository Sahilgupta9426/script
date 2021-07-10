console.log('Welcome to tut 12.js');
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links.length;


// let b=document.links;
// use document.images and document.scripts and print the list of images and scripts on an html page
// console.log(c);



// let str="sahil.com";
// for(i=0;i<a;i++){
//     let str2=document.links[i];
//     let str3=str2.toString();
    

//     if(str==str3){
//         console,log(str)
    
// }
// else{
//     console.log("not found")
// }
// }








// Challenge Accepted
let site = document.links;

Array.from(site).forEach(function(word){

    if(word.href.includes("sahil")){
        console.log(word.href);
    }

}); 