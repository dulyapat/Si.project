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
const slideTwo = document.querySelector(".textshow .content");
const slideThree = document.querySelector(".currentSlide2 img");
const slideFour = document.querySelector(".currentSlide3 img");

function onClick() {
  let number = i++;

  if (number === 1) {
    currentSlide.src = "img/img-2.jpg";
    slideThree.src = "img/img-3.jpg";
    slideFour.src = "img/img-1.jpg";
  }

  if (number === 2) {
    currentSlide.src = "img/img-3.jpg";
    slideThree.src = "img/img-1.jpg";
    slideFour.src = "img/img-2.jpg";
  }

  if (number === 3) {
    currentSlide.src = "img/img-1.jpg";
    slideThree.src = "img/img-2.jpg";
    slideFour.src = "img/img-3.jpg";
    i = 1;
  }
}

const current = document.querySelector(".loopSlide");

const slideSection = allSlide.forEach(function (i) {
  let html = ``;
});

var currentImageIndex = 0;

function nextPic() {
  currentImageIndex = (currentImageIndex + 1) % myPicture.length;
  current.images[0].src = myPicture[currentImageIndex];
}

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 1,
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
