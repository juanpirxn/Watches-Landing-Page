document.addEventListener('DOMContentLoaded', function () {
    gsap.from('header',{
    
        opacity: 0,
        duration: 1,
        ease: 'power2.in0ut'
    });

    gsap.from('.logo',{
    
       y: -50,
       opacity: 0,
       duration: 1,
       delay: 0.5,
       ease: 'bounce.out' 
    });

    gsap.from('.nav__link',{
    
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.in0ut',
        delay: 1
    });

    gsap.from('.buttons-group__button',{
    
        scale: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        delay: 1.5

    });

    gsap.from('.box',{
    
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        delay: 2.5

    });

    gsap.from('.content',{
        
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        delay: 2.7

    });

    gsap.from('.cards',{
        
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        delay: 3.3

    });

    gsap.from('.rrss',{
    
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.3)',
        delay: 3.7

    });

})

/* Mostrar/Ocultar menú*/
let nav = document.querySelector('nav');
let buttonMenu = document.querySelector('.button-menu');

buttonMenu.addEventListener('click', function() {
    nav.classList.toggle('active');
    changeIcon();
})

function changeIcon() {
    let iconBtonMenu = document.querySelector('.button-menu i');

    if (iconBtonMenu.classList.contains('ri-menu-3-line')) {
        iconBtonMenu.classList.remove('ri-menu-3-line');
        iconBtonMenu.classList.add('ri-close-line');
    } else {
        iconBtonMenu.classList.remove('ri-close-line');
        iconBtonMenu.classList.add('ri-menu-3-line');
    }
}