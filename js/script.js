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


function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

let modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal_close'),
    overlay = document.querySelector('.overlay'),
    trigBtn = document.querySelector('.footer_btn');

trigBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    let scroll = calcScroll();

    document.body.style.marginRight = `${scroll}px`;
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
});

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
});


let modalBtn = document.querySelector('.modal_btn'),
modalInput = document.querySelectorAll('.modal_input'),
inputs = document.querySelectorAll('.input');

modalBtn.addEventListener('click', () => {
    inputs.forEach((item, i) => {
        if(item.value == '') {
            if(!item.classList.contains('req')) {
                item.classList.add('req');
            }
        }
    });
});


inputs.forEach((item, i) => {
    item.addEventListener('input', () => {
        if(!item.value == '') {
            if(item.classList.contains('req')) {
                item.classList.remove('req');
            }
        } else if (item.value == '') {
            if(!item.classList.contains('req')) {
                item.classList.add('req');
            }
        }
    });
});

function sendForm() {
    let modalForm = document.querySelector('.modal_form');

    const postData = async (url, data) => {
        const rec = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        });

        return rec.text();
    };

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        
        let formData = new FormData(modalForm);

        postData('../server.json', formData).then((rec) => {
            console.log(rec);
            console.log('work');
        }).catch( () => console.log('fail')).finally(() => {
            console.log('Script is work');
        });
        
    });
}
sendForm();