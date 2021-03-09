
let slideList = document.getElementById('slide-list-box'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next'),
    currentIndex = 0,
    pagerBtn = document.querySelectorAll('.slick-dots .slick-slide span');
    console.log(pagerBtn);

    for(let i = 0; i < slideCount; i++) {
        slides[i].style.left =  i*100 + '%';
    }

    function goToSlide(idx) {
        slideList.style.left =  idx * -100 + '%';
        currentIndex = idx;

        for(let k = 0; k < pagerBtn.length; k++) {
            pagerBtn[k].classList.remove('active');//페이저 각각에 active 클래스 지우기
        }
        pagerBtn[idx].classList.add('active');//이동하는 페이저에만 active 클래스 만들기
    }
    goToSlide(0);//페이저 초기값 active 클래스 설정

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

    //자동 슬라이드
    setInterval(function() {
        let nextIdx = (currentIndex + 1) % slideCount;//자동으로 계속 돌도록 다음 페이지 인덱스 설정
        goToSlide(nextIdx);
    }, 5000);


    /* opacity: 0;
    transition: opacity 300ms linear 0s; */