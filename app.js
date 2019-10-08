const box = document.querySelector('.box');
const body = document.querySelector('body');
i=0;

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
