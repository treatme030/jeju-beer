let mMenu = document.getElementById('mMenu'),
    customMenu = document.getElementById('customMenu'),
    closeBtn = document.getElementById('closeBtn');

    mMenu.addEventListener('click', function(e){
        e.preventDefault();
        customMenu.style= 'display: flex; opacity: 1;';
    });

    closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        customMenu.style= 'display: none; opacity: 0;';
    });
