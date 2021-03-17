let scrollHeight = document.documentElement.scrollTop,//스크롤된 양
    topBtn = document.getElementById('topBtn'),
    offset = 145;

window.addEventListener('scroll', function(){
    scrollHeight = document.documentElement.scrollTop;
    if(scrollHeight > 145){
        topBtn.style = 'opacity: 1;';
    } else {
        topBtn.style = 'opacity: 0;';
    }
}
);

// topBtn.addEventListener( 'click', function(e){
//     e.preventDefault();
//     scrollToTop();
// });

// //스크롤 양이 0이 아닐 때 일정시간마다 높이 조금씩 빼서 위로 이동하기
// function scrollToTop(){
//     setInterval(function(){
//         if(scrollHeight !=0){
//             window.scrollBy(0, -55);// -55씩 높이 빼주기, scrollBy(x, y)
//         }
//     }, 15);
// }
