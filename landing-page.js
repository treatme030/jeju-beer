let slideContainer = document.getElementsByClassName('slide-container'),
    slideList = document.getElementsByClassName('slide-list'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next'),
    currentIndex = 0;

    for(let i = 0; i < slideCount; i++) {
        slides[i].style.left =  i*100 + '%';
    }

    function goToSlide(idx) {
        slideList[0].style.left =  idx * -100 + '%';
        currentIndex = idx;
    }

    navPrev.addEventListener('click', function() {
        if(currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(slideCount - 1);
        }
    });
    
    navNext.addEventListener('click', function() {
        if(currentIndex < slideCount - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    });