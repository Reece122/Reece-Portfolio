AbBtn = document.getElementById('about');
AchBtn = document.getElementById('acheivements');
ExpBtn = document.getElementById('experience');
ProjBtn = document.getElementById('projects');
ConBtn = document.getElementById('contact');


AbBtn.onclick = function(){
     window.scrollTo({
        top: 500,
        behavior: 'smooth' // This makes the scrolling smooth
    });
}

AchBtn.onclick = function(){
    window.scrollTo({
       top: 3000,
       behavior: 'smooth' // This makes the scrolling smooth
   });
}
ExpBtn.onclick = function(){
    window.scrollTo({
       top: 1000,
       behavior: 'smooth' // This makes the scrolling smooth
   });
}
ProjBtn.onclick = function(){
    window.scrollTo({
       top: 2000,
       behavior: 'smooth' // This makes the scrolling smooth
   });
}
ConBtn.onclick = function(){
    window.scrollTo({
       top: 4000,
       behavior: 'smooth' // This makes the scrolling smooth
   });
}

