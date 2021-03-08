//변수지정

let sliderContainer = document.getElementsByClassName('present-slide-box');
let slides = document.getElementsByClassName('p-slide1');//슬라이드
let slides2 = document.getElementsByClassName('p-slide2');
let slides3 = document.getElementsByClassName('p-slide3');
let slideCount = slides.length;//슬라이드 개수
let slideCount2 = slides2.length;
let slideCount3 = slides3.length;//슬라이드 개수

let navPrev = document.getElementsByClassName('prev');
let navNext = document.getElementsByClassName('next');
let currentIndex = 0;//현재 보이는 슬라이드 인덱스 번호
let currentIndex2 = 0;
let currentIndex3 = 0;

//slide-1

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
navPrev[0].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(slideCount - 1);//처음일때 마지막으로 이동
    }
});

navNext[0].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex < slideCount - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);//마지막일 때 처음으로 이동
    }
});

//slide-2

//슬라이드 가로로 배열하기: left 값 변경
for(let j = 0; j < slideCount2; j++) {
    slides2[j].style.left =  j*100 + '%';
}

//슬라이드 이동 함수
function goToSlide2(idx) {
    sliderContainer[1].style.left =  idx * -100 + '%';
    sliderContainer[1].classList.add('animated');//트랜지션 동작할 클래스명 추가
    currentIndex2 = idx;
}




//버튼 클릭하면 슬라이드 이동시키기
//아이디명.addEventListener('이벤트 종류', function(){});
navPrev[1].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex2 > 0) {
        goToSlide2(currentIndex2 - 1);
    } else {
        goToSlide2(slideCount2 - 1);//처음일때 마지막으로 이동
    }
});

navNext[1].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex2 < slideCount2 - 1) {
        goToSlide2(currentIndex2 + 1);
    } else {
        goToSlide2(0);//마지막일 때 처음으로 이동
    }
});

//slide-3

//슬라이드 가로로 배열하기: left 값 변경
for(let k = 0; k < slideCount3; k++) {
    slides3[k].style.left =  k*100 + '%';
}

//슬라이드 이동 함수
function goToSlide3(idx) {
    sliderContainer[2].style.left =  idx * -100 + '%';
    sliderContainer[2].classList.add('animated');//트랜지션 동작할 클래스명 추가
    currentIndex3 = idx;
}

//버튼기능 업데이트 함수


//버튼 클릭하면 슬라이드 이동시키기
//아이디명.addEventListener('이벤트 종류', function(){});
navPrev[2].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex3 > 0) {
        goToSlide3(currentIndex3 - 1);
    } else {
        goToSlide3(slideCount3 - 1);//처음일때 마지막으로 이동
    }
});

navNext[2].addEventListener('click', function(e) {
    e.preventDefault();//a태그의 기본 링크 기능 없앰
    if(currentIndex3 < slideCount3 - 1) {
        goToSlide3(currentIndex3 + 1);
    } else {
        goToSlide3(0);//마지막일 때 처음으로 이동
    }
});
