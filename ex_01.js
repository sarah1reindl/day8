document.addEventListener('DOMContentLoaded', function () {
    new Splide('#latest-creations-carousel', {
        type      : 'loop',          
        perPage   : 3,                 
        autoplay  : true,              
        interval  : 3000,              
        focus     : 'center',          
        breakpoints: {
            600: {
                perPage: 1,            
            },
            900: {
                perPage: 2,            
            },
        },
    }).mount();
});
