(function(){

    const getHeader =  document.getElementById('header');
    const getBtnMenu = document.querySelector('.js-menu-btn');
    const getMenuBox = document.querySelector('.js-header-menu');

    getBtnMenu.addEventListener('click', function() {
        
        if(this.classList.contains('open-burger')) {
            getMenuBox.classList.remove('open-menu');
            this.classList.remove('open-burger');
        } else {
            getMenuBox.classList.add('open-menu');
            this.classList.add('open-burger');
        }
    });


    window.addEventListener('scroll', () => {
        if( window.pageYOffset > 10 ) {
            getHeader.classList.add('header--scroll');
        } else {
            getHeader.classList.remove('header--scroll');
        }
    })

})();