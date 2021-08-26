let animItems = document.querySelectorAll(".anim");

if(animItems.length > 0) {
    window.addEventListener('scroll', animShow);
    function animShow () {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i],
                animItemHeight = animItem.offsetHeight,
                animItemOffset = offset(animItem).top,
                animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if ( window.innerHeight < animItemHeight) {
                inimItemOffset = window.innerHeight - window.innerHeight / animStart;
            }

            if(pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("active");
            } else {
                if(!animItem.classList.contains("no")) {
                    animItem.classList.remove("active");
                }
                
            }
        }
    }

    animShow();
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        };
    }
}


const siwper = new Swiper('.comment_container', {

    slidesPerView: 1,
    
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: 1,  
        },
        // when window width is >= 640px
        767: {
          slidesPerView: 2
        }
      }
});


let modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal_close'),
    overlay = document.querySelector('.overlay'),
    trigBtn = document.querySelector('.footer_btn');

trigBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});