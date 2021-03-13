let mMenu = document.getElementById('mMenu'),
    customMenu = document.getElementById('customMenu'),
    closeBtn = document.getElementById('closeBtn');

    mMenu.addEventListener('click', function(e){
        e.preventDefault();
        customMenu.style= 'z-index: 3000; opacity: 1; animation: fadeIn .3s;';
    });

    closeBtn.addEventListener('click', function(){
        customMenu.style= 'z-index: -1; opacity: 0; animation: fadeOut .3s;';
    });
    