//변수지정
let sliderWrapper = document.getElementsByClassName('present-slide-container');
let sliderContainer = document.getElementsByClassName('present-slide-box');
let slides = document.getElementsByClassName('present-slide');//슬라이드
let slideCount = slides.length;//슬라이드 개수
let navPrev = document.getElementById('prev');
let navNext = document.getElementById('next');
let currentIndex = 0;//현재 보이는 슬라이드 인덱스 번호

//슬라이드 가로로 배열하기: left 값 변경
for(let i = 0; i < slideCount; i++) {
    slides[i].style.left =  i*100 + '%';
}

//슬라이드 이동 함수
function goToSlide(idx) {
    sliderContainer[0].style.left =  idx * -100 + '%';
    sliderContainer[0].classList.add('animated');//트랜지션 동작할 클래스명 추가
    currentIndex = idx;
}

//버튼기능 업데이트 함수


//버튼 클릭하면 슬라이드 이동시키기
//아이디명.addEventListener('이벤트 종류', function(){});
navPrev.addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);//처음일때 마지막으로 이동
    }
});

navNext.addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex < slideCount - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);//마지막일 때 처음으로 이동
    }
});

