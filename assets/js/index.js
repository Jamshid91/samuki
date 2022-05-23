const menuBurger = document.querySelector('.menu-burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      mobileMenuLists = document.querySelectorAll('.mobile-menu ul li'),
      loader = document.querySelector('.loader'),
      body = document.querySelector('body'),
      odometer1 = document.querySelector('.odometer1'),
      odometer2 = document.querySelector('.odometer2'),
      odometer3 = document.querySelector('.odometer3')


      window.onload = function () {
        setTimeout(() => {
            body.classList.add('overflow-visible')
            loader.classList.add('hidden');
            window.scrollTo(0, 0);
        }, 1000);
    }

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
});

mobileMenuLists.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBurger.classList.toggle('change');
        mobileMenu.classList.toggle('showMobileMenu');
    })
});

// odometer

function addAdometer() {
  setTimeout(() => {
      odometer1.innerHTML = 1
  }, 500);
  setTimeout(() => {
      odometer2.innerHTML = 6
  }, 500);
  setTimeout(() => {
      odometer3.innerHTML = 100
  }, 500);
}


window.addEventListener('scroll', () => {
const positionOdometer = odometer1.getBoundingClientRect().top;

const screenPosition = window.innerHeight;

if(screenPosition > positionOdometer) {
  addAdometer()
}
});



  // parallax
if (window.matchMedia("(min-width: 1024px)").matches) {
  let prl = document.querySelectorAll('.prl')
  document.addEventListener('mousemove', parallax)

  function parallax(e) {
    prl.forEach(prl => {
      const speed = prl.getAttribute('data-speed')

      const x = (window.innerWidth - e.pageX*speed)/80
      const y = (window.innerHeight - e.pageY*speed)/80

      prl.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  };
}





// our-NFTs-carousel
$('.our-NFTs-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    touchMove: true,
    centerMode: true,
    centerPadding: '100px',
    arrows: true,
  
    nextArrow: `<button class="slick-next">
                  <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293137 0.561936C-0.0973869 0.95246 -0.0973869 1.58563 0.293137 1.97615L5.58603 7.26904L0.293137 12.5619C-0.0973869 12.9525 -0.0973869 13.5856 0.293137 13.9761C0.683662 14.3667 1.31683 14.3667 1.70735 13.9761L7.70735 7.97615C8.09787 7.58563 8.09787 6.95246 7.70735 6.56194L1.70735 0.561936C1.31683 0.171412 0.683662 0.171412 0.293137 0.561936Z" fill="white"/>
                  </svg>
                </button>`,
  
  prevArrow: `<button class="slick-prev">
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70686 0.561936C8.09739 0.95246 8.09739 1.58563 7.70686 1.97615L2.41397 7.26904L7.70686 12.5619C8.09739 12.9525 8.09739 13.5856 7.70686 13.9761C7.31634 14.3667 6.68317 14.3667 6.29265 13.9761L0.29265 7.97615C-0.0978737 7.58563 -0.0978737 6.95246 0.29265 6.56194L6.29265 0.561936C6.68317 0.171412 7.31634 0.171412 7.70686 0.561936Z" fill="white"/>
                </svg>
              </button>`,
    
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
            arrows: false,
          }
        },
    ]
  });

  // our-team-carousel
$('.our-team-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    touchMove: true,
    centerMode: true,
    centerPadding: '150px',
    arrows: false,
    
    responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '0px',
            dots: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
          }
        },
    ]
  });