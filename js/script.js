AbBtn = document.getElementById('about');
AchBtn = document.getElementById('acheivements');
ExpBtn = document.getElementById('experience');
ProjBtn = document.getElementById('projects');
ConBtn = document.getElementById('contact');

function removeActiveClass() {
    const buttons = document.querySelectorAll('.sidebar .button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

function handleClick(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });   
}

document.getElementById('about').onclick = function () {
    window.scrollTo({ top: 500, behavior: 'smooth' });
    removeActiveClass();
    this.classList.add('active');
};

document.getElementById('experience').onclick = function () {
    window.scrollTo({ top: 950, behavior: 'smooth' });
    removeActiveClass();
    this.classList.add('active');
};

document.getElementById('projects').onclick = function () {
    window.scrollTo({ top: 1380, behavior: 'smooth' });
    removeActiveClass();
    this.classList.add('active');
};

document.getElementById('acheivements').onclick = function () {
    window.scrollTo({ top: 2160, behavior: 'smooth' });
    removeActiveClass();
    this.classList.add('active');
};

document.getElementById('contact').onclick = function () {
    window.scrollTo({ top: 3050, behavior: 'smooth' });
    removeActiveClass();
    this.classList.add('active');
};

window.addEventListener('scroll', function() {
    let currentSection = '';
    if (window.scrollY >= 3050) {
        currentSection = 'contact';
    } else if (window.scrollY >= 2160) {
        currentSection = 'acheivements';
    } else if (window.scrollY >= 1380) {
        currentSection = 'projects';
    } else if (window.scrollY >= 950) {
        currentSection = 'experience';
    } else if (window.scrollY >= 500) {
        currentSection = 'about';
    }

    removeActiveClass();
    if (currentSection) {
        document.getElementById(currentSection).classList.add('active');
    }
});