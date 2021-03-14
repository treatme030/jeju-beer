let slideList = document.querySelectorAll('.present-slide-list'),
    slide = document.querySelectorAll('.p-slide1'),
    slide2 = document.querySelectorAll('.p-slide2'),
    slide3 = document.querySelectorAll('.p-slide3'),
    currentIdx = 0,
    currentIdx2 = 0,
    currentIdx3 = 0,
    size = slide[0].clientWidth,
    prevBtn = document.querySelectorAll('.prev'),
    nextBtn = document.querySelectorAll('.next');

    //3개의 슬라이드박스 배열로 만들어 한번에 적용
    let slideArr = [slide, slide2, slide3];
    let currentArr = [currentIdx, currentIdx2, currentIdx3];

    for(let i = 0; i < slideArr.length; i++) {
        //슬라이드리스트 전체 넓이
        slideList[i].style.width = size * slideArr[i].length + 'px';

        //넓이만큼 왼쪽으로 이동함수
        function moveSlide(idx) {
            slideList[i].style.left = -size * idx + 'px';
            currentArr[i] = idx;
        }

        //버튼 클릭 이벤트
        prevBtn[i].addEventListener('click', function() {
            if(currentArr[i] > 0) {
                moveSlide(currentArr[i] - 1);
            } else {
                moveSlide(slideArr[i].length - 1);
            }
        });
            
        nextBtn[i].addEventListener('click', function() {
            if(currentArr[i] < slideArr[i].length - 1) {
                moveSlide(currentArr[i] + 1);
            } else {
                moveSlide(0);
            }
        });

        //자동슬라이드
        setInterval(function() {
            let nextIdx = (currentArr[i] + 1) % slideArr[i].length;
            moveSlide(nextIdx);
        }, 5000);
    }

