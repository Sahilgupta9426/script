console.log('this is sparta')
document.getElementById('list').addEventListener
('click',function(w) {
    console.log('you have clicked the screen');
    let val;
    console.log('you have clicked on this event')
    val=w.target;
    val=w.target.className
    val=Array.from(w.target.classList);
    console.log(val);
    

    
})