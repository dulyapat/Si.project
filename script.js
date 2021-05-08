const slide1 = {
  text: "test",
  img: "http://www.bildersuche.org/images/logos/pixabay-logo.png",
};

const slide2 = {
  text: "test2",
  img: "http://www.bildersuche.org/images/logos/123rf-logo.jpg",
};

const slide3 = {
  text: "test3",
  img: "http://www.java2s.com/style/download.png",
};

const allSlide = [slide1, slide2, slide3];

console.log(allSlide);

let i = 1;
const currentSlide = document.querySelector(".currentSLide img");
const slideTwoHead = document.querySelector(".textshow .content h1");
const slideTwoSubHead = document.querySelector(".textshow .content h2");
const slideThree = document.querySelector(".currentSlide2 img");
const slideFour = document.querySelector(".currentSlide3 img");
const textHightlight = document.querySelector('.content-bellow .highlight');
const menuToggle = document.querySelector('.menuToggle');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuSection = document.querySelector('.menu');
const menuSidebar = document.querySelector('#menu__sidebar');
const logo = document.querySelector('.logo');


menuToggle.addEventListener('click' , function(e){
  e.preventDefault();
  menuSection.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
  menuSidebar.classList.toggle('morefront');
  logo.classList.toggle('hidden');

});



console.log(textHightlight);

function onClick() {
  let number = i++;

  if (number === 1) {
    currentSlide.src = "img/img-2.jpg";
    slideThree.src = "img/img-3.jpg";
    slideFour.src = "img/img-1.jpg";
    slideTwoHead.innerText = "Professional";
    slideTwoSubHead.innerText = "Team";
    textHightlight.innerText = "Cosmetic";
  }

  if (number === 2) {
    currentSlide.src = "img/img-3.jpg";
    slideThree.src = "img/img-1.jpg";
    slideFour.src = "img/img-2.jpg";
    slideTwoHead.innerText = "Better";
    slideTwoSubHead.innerText = "Making";
    textHightlight.innerText = "The Best";
  }

  if (number === 3) {
    currentSlide.src = "img/img-1.jpg";
    slideThree.src = "img/img-2.jpg";
    slideFour.src = "img/img-3.jpg";
    slideTwoHead.innerText = "Leading";
    slideTwoSubHead.innerText = "In Asian";
    textHightlight.innerText = "beauty";
    i = 1;
  }
}



var currentImageIndex = 0;

function nextPic() {
  currentImageIndex = (currentImageIndex + 1) % myPicture.length;
  current.images[0].src = myPicture[currentImageIndex];
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  centeredSlides:false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});