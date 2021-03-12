
let slideList = document.getElementById('slide-list-box'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next'),
    currentIndex = 0,
    pagerBtn = document.querySelectorAll('.slick-dots .slick-slide span');


    function goToSlide(idx) {
        currentIndex = idx;
        for(let i = 0; i < slideCount; i++){
            if(i != idx){
                slides[i].style = 'opacity: 0; z-index: 998;';
                pagerBtn[i].style = 'opacity: 0.4;';
            }
            slides[idx].style = 'opacity: 1; z-index: 999;';
            pagerBtn[idx].style = 'opacity: 1;';
        }
    }
    goToSlide(0);//초기값

    //이전버튼 클릭시 이벤트
    navPrev.addEventListener('click', function() {
        if(currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(slideCount - 1);
        }
    });
    
    //다음버튼 클릭시 이벤트
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
