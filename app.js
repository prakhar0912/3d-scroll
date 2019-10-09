const box = document.querySelector('.box');
const body = document.querySelector('body');
const okay  = document.querySelector('.one');
const five = document.querySelector('.five');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const audio = document.querySelector('audio');


const arr = ['Space','Space <br> <br><span id="subtitle" style="font-size:0.3rem;font-style:italic; ">The New Frontier<span>','0&ay','ok☺️y','oka9'];
const zposition = [0, 1400,2520];

TweenLite.fromTo(".one", 1, {
    transform: "translate3d(-50%,-50%,3200px)"
},{
    transform: "translate3d(-50%,-50%,2500px)"  
});
audio.pause();






// changing letters
m=0;
okay.addEventListener('mouseover',()=>{
    
    var a = setInterval(()=>{
        okay.innerHTML= arr[m];
        m++;
        if (m > 4){
            m = 0;
            clearInterval(a);
        }
    },600);
    
})

// traversing z-axis
i=0;
addEventListener('mousewheel', (e)=>{
    audio.play();
    if(i>2500){
        body.style.overflowY = 'scroll';
        body.style.overflowX = 'hidden'; 
        five.style.top = 0;
        five.style.left = 0;
        five.style.transform = 'translate3d(0,0,0px)';
        removeEventListener();
    }
    
    if (e.wheelDelta<=0){     
        i+=40;
    }
    else{          
        i-=40;
        audio.pause();
        
    }
    box.style.transform ='translateZ('+i+'px)';
  
    console.log(i)
})


//prev and next
n = 1;

next.addEventListener('click', ()=>{

    for (i = 0;i<3;i++){
        if (i == n){
            TweenLite.to(box, 1, {
                transform : 'translateZ('+zposition[i]+'px)'
            });
            
        }
    }
    n++;
    if (n == 3){
        n = 0;
    }
}) 