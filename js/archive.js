window.addEventListener('load', function(){
    let slideList = document.getElementById('gSlideList'),
            gSlide = document.getElementsByClassName('g-slide'),
            gCurrentIdx = 0,
            gSlideCount = gSlide.length,
            gSlideWidth = gSlide[0].clientWidth;

    makeClone();

    function makeClone(){
            for(let i = 0; i < gSlideCount; i++){
            let cloneSlide = gSlide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slideList.appendChild(cloneSlide);
            }
            for(let i = gSlideCount - 1; i >= 0; i--){
            let cloneSlide = gSlide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slideList.prepend(cloneSlide);
            }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
            slideList.classList.add('animated');
            },100);
    }

    function updateWidth(){
            let currentSlides = document.getElementsByClassName('g-slide');
            let newSlideCount = currentSlides.length;
            let newWidth = gSlideWidth * newSlideCount + 'px';
            slideList.style.width = newWidth;
    }

    function setInitialPos(){
            let initialTranslateValue = -gSlideWidth * gSlideCount;
            slideList.style.transform = 'translateX(' + initialTranslateValue + 'px)';
    }

    function goToSlide(num){
            slideList.style.left = -num * gSlideWidth + 'px';
            gCurrentIdx = num;

            if(gCurrentIdx == gSlideCount || gCurrentIdx == -gSlideCount + 4){
            setTimeout(function(){
                    slideList.classList.remove('animated');
                    slideList.style.left = '0px'; 
                    gCurrentIdx = 0;            
            }, 500);
            setTimeout(function(){
                    slideList.classList.add('animated');
            }, 600);
            }
    }

    setInterval(function() {
            let nextIdx = (gCurrentIdx + 1) % gSlideCount;
            goToSlide(nextIdx);
    }, 5000);
});

window.addEventListener('load', function(){  
    let scrollH = window.pageYOffset;
    let screenH = document.documentElement.clientHeight;
    
    window.addEventListener('scroll', function(){
        scrollH = window.pageYOffset;
        console.log(scrollH);
        if(scrollH > document.getElementById('section3').offsetTop - screenH){
            document.querySelector('.visual-3-text-area p:nth-child(1)').style = 'animation: slideInUp 1s both;';
            document.querySelector('.visual-3-text-area p:nth-child(2)').style = 'animation: slideInUp 1s 0.2s both;';
            document.querySelector('.visual-3-text-area p:nth-child(3)').style = 'animation: slideInUp 1s 0.4s both;';
            document.querySelector('.visual-3-text-area p:nth-child(4)').style = 'animation: slideInUp 1s 0.6s both;';
            document.querySelector('.visual-3-text-area p:nth-child(5)').style = 'animation: slideInUp 1s 0.8s both;';
        } 
        if(scrollH > document.getElementById('section7').offsetTop - screenH){
            document.querySelector('.visual-7-title p:nth-child(1)').style = 'animation: slideInUp 1s both;';
            document.querySelector('.visual-7-title p:nth-child(2)').style = 'animation: slideInUp 1s 0.2s both;';
            document.querySelector('.present-list.up').style = 'animation: slideInUp 1s 0.4s both;';
            document.querySelector('.present-list.down').style = 'animation: slideInUp 1s 0.8s both;';
        }
        if(scrollH > document.getElementById('section8').offsetTop - screenH){
            document.querySelector('.visual-8-text p:nth-child(1)').style = 'animation: slideInUp 1s both;';
            document.querySelector('.visual-8-text p:nth-child(2)').style = 'animation: slideInUp 1s 0.2s both;';
            document.querySelector('.visual-8-text p:nth-child(3)').style = 'animation: slideInUp 1s 0.4s both;';
            document.querySelector('.circle1').style = 'animation: slideInUp 1s 0.7s both;';
            document.querySelector('#house1 .house-text').style = 'animation: slideInUp 1s 0.9s both;';
        }
        if(scrollH > document.getElementById('house1').offsetTop - screenH + 800){
            document.getElementById('houseimg1').style = 'animation: slideInUp 1s both;';
        }
        if(scrollH > document.getElementById('housesktech1').offsetTop - screenH){
            document.querySelector('#housesktech1 .house-sktech-box img').style = 'animation: slideInUp 1s both;';
            document.querySelector('#housesktech1 .house-sktech-box .sktech-desc p').style = 'animation: slideInUp 1s 0.1s both;';
            document.querySelector('#housesktech1 .house-sktech-box .sktech-desc a').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('.circle2').style = 'animation: slideInUp 1s 0.6s both;';
            document.querySelector('#house2 .house-text').style = 'animation: slideInUp 1s 0.8s both;';
        }
        if(scrollH > document.getElementById('house2').offsetTop - screenH + 800){
            document.getElementById('houseimg2').style = 'animation: slideInUp 1s both;';
        }
        if(scrollH > document.getElementById('housesktech2').offsetTop - screenH){
            document.querySelector('#housesktech2 .house-sktech-box img').style = 'animation: slideInUp 1s both;';
            document.querySelector('#housesktech2 .house-sktech-box .sktech-desc p').style = 'animation: slideInUp 1s 0.1s both;';
            document.querySelector('#housesktech2 .house-sktech-box .sktech-desc a').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('.circle3').style = 'animation: slideInUp 1s 0.6s both;';
            document.querySelector('#house3 .house-text').style = 'animation: slideInUp 1s 0.8s both;';
        }
        if(scrollH > document.getElementById('house3').offsetTop - screenH + 800){
            document.getElementById('houseimg3').style = 'animation: slideInUp 1s both;';
        }
        if(scrollH > document.getElementById('housesktech3').offsetTop - screenH){
            document.querySelector('#housesktech3 .house-sktech-box img').style = 'animation: slideInUp 1s both;';
            document.querySelector('#housesktech3 .house-sktech-box .sktech-desc p').style = 'animation: slideInUp 1s 0.1s both;';
            document.querySelector('#housesktech3 .house-sktech-box .sktech-desc a').style = 'animation: slideInUp 1s 0.3s both;';
        }
        if(scrollH > document.getElementById('trip').offsetTop - screenH){
            document.querySelector('#trip .present-box p:first-child').style = 'animation: slideInUp 1s both;';
            document.querySelector('#trip .present-box img').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('#trip .present-box .present-info').style = 'animation: slideInUp 1s 0.5s both;';
        }
        if(scrollH > document.getElementById('photo').offsetTop - screenH){
            document.querySelector('#photo .present-box p:first-child').style = 'animation: slideInUp 1s both;';
            document.querySelector('#photo .present-box img').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('#photo .present-box .present-info').style = 'animation: slideInUp 1s 0.5s both;';
        }
        if(scrollH > document.getElementById('rent').offsetTop - screenH){
            document.querySelector('#rent .present-box p:first-child').style = 'animation: slideInUp 1s both;';
            document.querySelector('#rent .present-box img').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('#rent .present-box .present-info').style = 'animation: slideInUp 1s 0.5s both;';
            document.querySelector('#rent .present-box .rent-info').style = 'animation: slideInUp 1s 0.7s both;';
        }
        if(scrollH > document.getElementById('air').offsetTop - screenH){
            document.querySelector('#air .present-box p:first-child').style = 'animation: slideInUp 1s both;';
            document.querySelector('#air .present-box img').style = 'animation: slideInUp 1s 0.3s both;';
            document.querySelector('#air .present-box .present-info').style = 'animation: slideInUp 1s 0.5s both;';
        }
    });
}); 