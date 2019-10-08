const box = document.querySelector('.box');
const body = document.querySelector('body');


i=0;

window.onload = ()=> {
    let okay  = document.querySelector('.one');
    const arr = ['okay','@kay','0&ay','ok6y','oka9'];
let o  = okay[0];
let m=0;
setInterval(()=>{
     okay.innerHTML= arr[m] ;
     m++;
     if(m===4){
         m=0;
     }
},200);
};

addEventListener('mousewheel', (e)=>{
    if(i>2700){
        body.style.overflow = 'scroll';
        removeEventListener();
    }
    if (e.wheelDelta<=0){     
        i+=20;
    }
    else{          
        i-=20;
    }
    box.style.transform ='translateZ('+i+'px)';  
    console.log(i)
})
