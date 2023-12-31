import "./styles/index.scss";
// import $ from "jquery";
// import 'bootstrap';

// $(".block").html("jQuery is working");

let up = document.querySelectorAll(".up");
let down = document.querySelectorAll(".down");
let input = document.querySelectorAll(".stepper-input");

for (let i = 0; i < up.length; i++) {
  up[i].addEventListener("click", function (e) {
    console.log(e.target);
    if (input[i].value <= 500) {
      input[i].value++;
      input[i].innerHTML = input[i].value;
      console.log(document.querySelector(".stepper-input").value);
    }
  });
  down[i].addEventListener("click", function (e) {
    if (input[i].value > 0) {
      input[i].value--;
      input[i].innerHTML = input[i].value;
    }
  });
}

let chbx = document.querySelectorAll(".label input");
// function validate() {
// }

for (let i = 0; i < chbx.length; i++) {
  chbx[i].addEventListener("click", function (e) {
    if (document.querySelector(".checkbox3").checked) {
      document.querySelector(".label3").classList.add("active");
    } else {
      document.querySelector(".label3").classList.remove("active");
    }
    if (document.querySelector(".checkbox4").checked) {
      document.querySelector(".label4").classList.add("active");
    } else {
      document.querySelector(".label4").classList.remove("active");
    }
  });
}

// Popup
let header = document.querySelector(".header");
let menu = document.querySelector(".header-top");

header.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("burger_menu") ||
    e.target.parentElement.classList.contains("burger_menu")
  ) {
    menu.classList.add("menu__active");
  }
});

menu.addEventListener("click", function (e) {
  console.log(e.target);
  if (
    e.target.classList.contains("close") ||
    e.target.tagName == "SPAN" ||
    !e.target.parentElement.classList.contains("close")
  )
    menu.classList.remove("menu__active");
});

// function reloadWindow() {
//   if (
//     (window.innerWidth || document.body.clientWidth) > 768 &&
//     (window.innerWidth || document.body.clientWidth) < 770
//   ) {
//     window.location.reload();
//   }
// }
// // Fixed header
function showHeader() {
  const header = document.querySelector(".header");

  if (window.pageYOffset > 15) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
}

window.addEventListener("scroll", function () {
  showHeader();
});
// https://picsum.photos/id/1/200
// Get a specific image by adding /id/{image} to the start of the url.
// window.addEventListener("DOMContentLoaded", function ready() {

//   let random = Math.floor(Math.random() * 9) + 1;

//   switch (random) {
//       case 1:
//           break;
//       case 2:
//           break;
//       case 3:
//           break;
//       case 4:
//           break;
//   case 5:
//           break;
//       default:
//           break;
//   }
// });

function addBlock() {
  if ((window.innerWidth || document.body.clientWidth) <= 768) {
    let delPay = document.querySelectorAll(".pay-wrap");
    delPay.forEach((block) => block.remove());
    let morePay = document.querySelectorAll(".more .more-info");
    morePay.forEach(
      (block) =>
        (block.innerHTML += `
      <div class="pay-wrap">
        <span class="i-pay _icon-masterrcard"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span><span class="path4"></span
        ></span>
        <span class="i-pay _icon-discover"
          ><span class="path1"></span><span class="path2"></span
        ></span>
        <span class="i-pay _icon-amex"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span
        ></span>
        <span class="i-pay _icon-maestro"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span><span class="path4"></span
          ><span class="path5"></span><span class="path6"></span
          ><span class="path7"></span><span class="path8"></span
          ><span class="path9"></span><span class="path10"></span
        ></span>
        <span class="i-pay _icon-union-pay"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span><span class="path4"></span
        ></span>
        <span class="i-pay _icon-jcb"
          ><span class="path1"></span><span class="path2"></span
          ><span class="path3"></span
        ></span>
      </div>
      `)
    );
  }
}
// function reloadWindow() {
//   if (
//     (window.innerWidth || document.body.clientWidth) > 768 &&
//     (window.innerWidth || document.body.clientWidth) < 770
//   ) {
//     window.location.reload();
//   }
// }

// window.onload = function () {
//   addBlock();
//   window.onresize = function resize() {
//     addBlock();
//     reloadWindow();
//   };
// };

// const userStack = {
//   language: "JavaScript",
//   framework: "",
// };

// const user = {
//   name: "Kiryl",
//   age: "33",
//   ...userStack,
// };

// console.log(user);

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Lazy,
  EffectCoverflow,
  Virtual,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Lazy, EffectCoverflow, Virtual]);
// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  navigation: {
    nextEl: ".swiperNext",
    prevEl: ".swiperPrev",
  },
  // speed: 5000,
  autoplay: {
    delay: 5000, // pause
    stopOnLastSlide: true, // stop last slide
    disableOnInteraction: false, // off use working
  },
  on: {
    // stop autoplay hover slide
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false, // preload start next slide
    loadPrevNext: false, // preload prev next slide
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
});

const swiperCart = new Swiper(".swiper-carts", {
  // Optional parameters
  loop: true,
  // watchOverflow: true, // отслеживание, если слайдов меньше чем нужно
  // slidesPerGroup: 2, // кол-во пролистываемых слайдов

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperNextCart",
    prevEl: ".swiperPrevCart",
  },
  // speed: 5000,
  slidesPerView: 4,
  spaceBetween: 30,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: true, // preload start next slide
    loadPrevNext: true, // preload prev next slide
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  // window.addEventListener("DOMContentLoaded", function ready() {

  //   let random = Math.floor(Math.random() * 9) + 1;

  //   switch (random) {
  //       case 1:
  //           break;
  //       case 2:
  //           break;
  //       case 3:
  //           break;
  //       case 4:
  //           break;
  //   case 5:
  //           break;
  //       default:
  //           break;
  //   }
  // });

  virtual: {
    // https://codesandbox.io/s/swiper-pagination-fraction-forked-6uswxd
    slides: (function () {
      let slides = [];
      // let random1 = String();
      // let random2 = String(
      //   `https://picsum.photos/id/${
      //     Math.floor(Math.random() * 100) + 1
      //   }/200/300`
      // );
      // let random3 = String(
      //   `https://picsum.photos/id/${
      //     Math.floor(Math.random() * 100) + 1
      //   }/200/300`
      // );
      // let random4 = String(
      //   `https://picsum.photos/id/${
      //     Math.floor(Math.random() * 100) + 1
      //   }/200/300`
      // );
      // console.log(random1);
      // console.log(random2);
      // console.log(random3);
      // console.log(random4);
      // for (let i = 5; i < 100; i++) {
      //   let a = `<div class="cart"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image: url(${`https://picsum.photos/id/${
      //     Math.floor(Math.random() * i) + 1
      //   }/200/300`});"</div>`;
      //   let b = `<div class="cart"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image: url(${`https://picsum.photos/id/${
      //     Math.floor(Math.random() * i) + 1
      //   }/200/300`});"></div>`;
      //   let c = `<div class="cart"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image: url(${`https://picsum.photos/id/${
      //     Math.floor(Math.random() * i) + 1
      //   }/200/300`});"></div>`;
      //   let d = `<div class="cart"><img class="swiper-lazy" src="assets/p-i-opacity.png" style="opacity:0.5;background-image: url(${`https://picsum.photos/id/${
      //     Math.floor(Math.random() * i) + 1
      //   }/200/300`});" alt="img">`;
      //   let slObj = [a, b, c, d];
      //   slides.push(slObj[Math.floor(Math.random() * 3) + 1]);

      for (let i = 5; i < 100; i++) {
        let a = `<div class="cart"><div class="cart-image"><div class="cart-image__top"><div class="stickers"><span class="action">Акция -25%</span><span class="new">Новинка</span><span class="recommend">Рекомендуем</span></div><div class="wishlist path-off"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.12533 0.75C3.65059 0.75 0.916992 3.4836 0.916992 6.95833C0.916992 9.08225 1.82573 11.0216 3.4378 13.0368C5.04663 15.0479 7.37501 17.1579 10.2504 19.6242L10.2616 19.6344L10.4908 19.843C11.3469 20.6224 12.6547 20.6249 13.5138 19.8488L13.7393 19.645L13.7955 19.5939C16.5622 17.0798 18.8784 14.9749 20.5007 12.9864C22.1285 10.9911 23.0837 9.0825 23.0837 6.95833C23.0837 3.4836 20.3501 0.75 16.8753 0.75C15.6308 0.75 14.4206 1.11731 13.3899 1.75224C13.0932 1.93496 12.8112 2.13999 12.5473 2.36507C12.355 2.52911 12.1722 2.70384 12.0003 2.88839C11.8285 2.70384 11.6457 2.52911 11.4533 2.36507C11.1894 2.13999 10.9074 1.93496 10.6108 1.75224C9.58006 1.11731 8.36989 0.75 7.12533 0.75ZM2.41699 6.95833C2.41699 4.31202 4.47901 2.25 7.12533 2.25C8.07623 2.25 9.01602 2.53162 9.82407 3.02937C10.2889 3.31569 10.704 3.66992 11.0486 4.07459L12.0003 5.19217L12.952 4.07459C13.2966 3.66992 13.7118 3.31569 14.1766 3.02937C14.9846 2.53162 15.9244 2.25 16.8753 2.25C19.5216 2.25 21.5837 4.31202 21.5837 6.95833C21.5837 8.59111 20.8624 10.1701 19.3384 12.0382C17.8 13.9239 15.5759 15.9492 12.7733 18.4961L12.7326 18.533L12.5082 18.7357C12.2219 18.9944 11.7859 18.9936 11.5006 18.7338L11.2706 18.5245L11.2453 18.5014L11.2296 18.4879C8.34561 16.0143 6.11903 13.9873 4.60913 12.0998C3.11308 10.2296 2.41699 8.61372 2.41699 6.95833Z" fill="#894083"></path><path class="path-off-svg" xmlns="http://www.w3.org/2000/svg" d="M0.916992 6.95833C0.916992 3.4836 3.65059 0.75 7.12533 0.75C8.36989 0.75 9.58006 1.11731 10.6108 1.75224C10.9074 1.93496 11.1894 2.13999 11.4533 2.36507C11.6457 2.52911 11.8285 2.70384 12.0003 2.88839C12.1722 2.70384 12.355 2.52911 12.5473 2.36507C12.8112 2.13999 13.0932 1.93496 13.3899 1.75224C14.4206 1.11731 15.6308 0.75 16.8753 0.75C20.3501 0.75 23.0837 3.4836 23.0837 6.95833C23.0837 9.0825 22.1285 10.9911 20.5007 12.9864C18.8784 14.9749 16.5622 17.0798 13.7955 19.5939L13.7393 19.645L13.5138 19.8488C12.6547 20.6249 11.3469 20.6224 10.4908 19.843L10.2616 19.6344L10.2504 19.6242C7.37501 17.1579 5.04663 15.0479 3.4378 13.0368C1.82573 11.0216 0.916992 9.08225 0.916992 6.95833Z" fill="#894083"></path></svg></div></div><div class="wrapper-img"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image:url(${`https://picsum.photos/id/${
          Math.floor(Math.random() * i) + 1
        }/200/300`})"><a href="#masthead"></a></div></div><div class="cart-caption"><div class="cart-caption__info"><h3 class="existence">В наличии</h3><span class="barcode">Код: 4744481010818</span></div><p class="cart-caption__desc">Консервы пастеризованные. Бульон куриный жидкий., 350мл<br>Консервы пастеризованные. Бульон</p></div><div class="cart-info"><div class="cart-info__price"><p class="cart-info__price-new">500.20 р.</p><p class="cart-info__price-old">600.20 р.</p></div><button class="btn-shopping-cart__link" href="#masthead"><div class="shopcart"><img class="img" src="assets/cart.svg" alt="cart"><span class="total-shopping">3</span></div></button></div><div class="cart-description"><div class="stepper"><span class="stepper-step down">-</span><input class="stepper-input" type="number" value="200" min="1" max="500" name="count_okna"><span class="stepper-step up">+</span></div><div class="cart-description__btns"><input class="input-submit" type="submit" value="Купить в 1 клик"><button class="btn-cart">В корзину</button></div></div></div>`;
        let b = `<div class="cart"><div class="cart-image"><div class="cart-image__top"><div class="stickers"><span class="action">Акция -25%</span><span class="new">Новинка</span></div><div class="wishlist path-off-all"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.12533 0.75C3.65059 0.75 0.916992 3.4836 0.916992 6.95833C0.916992 9.08225 1.82573 11.0216 3.4378 13.0368C5.04663 15.0479 7.37501 17.1579 10.2504 19.6242L10.2616 19.6344L10.4908 19.843C11.3469 20.6224 12.6547 20.6249 13.5138 19.8488L13.7393 19.645L13.7955 19.5939C16.5622 17.0798 18.8784 14.9749 20.5007 12.9864C22.1285 10.9911 23.0837 9.0825 23.0837 6.95833C23.0837 3.4836 20.3501 0.75 16.8753 0.75C15.6308 0.75 14.4206 1.11731 13.3899 1.75224C13.0932 1.93496 12.8112 2.13999 12.5473 2.36507C12.355 2.52911 12.1722 2.70384 12.0003 2.88839C11.8285 2.70384 11.6457 2.52911 11.4533 2.36507C11.1894 2.13999 10.9074 1.93496 10.6108 1.75224C9.58006 1.11731 8.36989 0.75 7.12533 0.75ZM2.41699 6.95833C2.41699 4.31202 4.47901 2.25 7.12533 2.25C8.07623 2.25 9.01602 2.53162 9.82407 3.02937C10.2889 3.31569 10.704 3.66992 11.0486 4.07459L12.0003 5.19217L12.952 4.07459C13.2966 3.66992 13.7118 3.31569 14.1766 3.02937C14.9846 2.53162 15.9244 2.25 16.8753 2.25C19.5216 2.25 21.5837 4.31202 21.5837 6.95833C21.5837 8.59111 20.8624 10.1701 19.3384 12.0382C17.8 13.9239 15.5759 15.9492 12.7733 18.4961L12.7326 18.533L12.5082 18.7357C12.2219 18.9944 11.7859 18.9936 11.5006 18.7338L11.2706 18.5245L11.2453 18.5014L11.2296 18.4879C8.34561 16.0143 6.11903 13.9873 4.60913 12.0998C3.11308 10.2296 2.41699 8.61372 2.41699 6.95833Z" fill="#894083"></path><path class="path-off-svg" xmlns="http://www.w3.org/2000/svg" d="M0.916992 6.95833C0.916992 3.4836 3.65059 0.75 7.12533 0.75C8.36989 0.75 9.58006 1.11731 10.6108 1.75224C10.9074 1.93496 11.1894 2.13999 11.4533 2.36507C11.6457 2.52911 11.8285 2.70384 12.0003 2.88839C12.1722 2.70384 12.355 2.52911 12.5473 2.36507C12.8112 2.13999 13.0932 1.93496 13.3899 1.75224C14.4206 1.11731 15.6308 0.75 16.8753 0.75C20.3501 0.75 23.0837 3.4836 23.0837 6.95833C23.0837 9.0825 22.1285 10.9911 20.5007 12.9864C18.8784 14.9749 16.5622 17.0798 13.7955 19.5939L13.7393 19.645L13.5138 19.8488C12.6547 20.6249 11.3469 20.6224 10.4908 19.843L10.2616 19.6344L10.2504 19.6242C7.37501 17.1579 5.04663 15.0479 3.4378 13.0368C1.82573 11.0216 0.916992 9.08225 0.916992 6.95833Z" fill="#894083"></path></svg></div></div><div class="wrapper-img"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image:url(${`https://picsum.photos/id/${
          Math.floor(Math.random() * i) + 1
        }/200/300`})"><a href="#masthead"></a></div></div><div class="cart-caption"><div class="cart-caption__info"><h3 class="existence">В наличии</h3><span class="barcode">Код: 4744481010818</span></div><p class="cart-caption__desc">Консервы пастеризованные. Бульон куриный жидкий., 350мл<br>Консервы пастеризованные. Бульон</p></div><div class="cart-info"><div class="cart-info__price"><p class="cart-info__price-new">500.20 р.</p><p class="cart-info__price-old">600.20 р.</p></div><button class="btn-shopping-cart__link" href="#masthead"><div class="shopcart"><img class="img" src="assets/cart.svg" alt="cart"><span class="total-shopping">3</span></div></button></div><div class="cart-description"><div class="stepper"><span class="stepper-step down">-</span><input class="stepper-input" type="number" value="200" min="1" max="500" name="count_okna"><span class="stepper-step up">+</span></div><div class="cart-description__btns"><input class="input-submit" type="submit" value="Купить в 1 клик"><button class="btn-cart">В корзину</button></div></div></div>`;
        let c = `<div class="cart"><div class="cart-image"><div class="cart-image__top"><div class="stickers"></div><div class="wishlist"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.12533 0.75C3.65059 0.75 0.916992 3.4836 0.916992 6.95833C0.916992 9.08225 1.82573 11.0216 3.4378 13.0368C5.04663 15.0479 7.37501 17.1579 10.2504 19.6242L10.2616 19.6344L10.4908 19.843C11.3469 20.6224 12.6547 20.6249 13.5138 19.8488L13.7393 19.645L13.7955 19.5939C16.5622 17.0798 18.8784 14.9749 20.5007 12.9864C22.1285 10.9911 23.0837 9.0825 23.0837 6.95833C23.0837 3.4836 20.3501 0.75 16.8753 0.75C15.6308 0.75 14.4206 1.11731 13.3899 1.75224C13.0932 1.93496 12.8112 2.13999 12.5473 2.36507C12.355 2.52911 12.1722 2.70384 12.0003 2.88839C11.8285 2.70384 11.6457 2.52911 11.4533 2.36507C11.1894 2.13999 10.9074 1.93496 10.6108 1.75224C9.58006 1.11731 8.36989 0.75 7.12533 0.75ZM2.41699 6.95833C2.41699 4.31202 4.47901 2.25 7.12533 2.25C8.07623 2.25 9.01602 2.53162 9.82407 3.02937C10.2889 3.31569 10.704 3.66992 11.0486 4.07459L12.0003 5.19217L12.952 4.07459C13.2966 3.66992 13.7118 3.31569 14.1766 3.02937C14.9846 2.53162 15.9244 2.25 16.8753 2.25C19.5216 2.25 21.5837 4.31202 21.5837 6.95833C21.5837 8.59111 20.8624 10.1701 19.3384 12.0382C17.8 13.9239 15.5759 15.9492 12.7733 18.4961L12.7326 18.533L12.5082 18.7357C12.2219 18.9944 11.7859 18.9936 11.5006 18.7338L11.2706 18.5245L11.2453 18.5014L11.2296 18.4879C8.34561 16.0143 6.11903 13.9873 4.60913 12.0998C3.11308 10.2296 2.41699 8.61372 2.41699 6.95833Z" fill="#894083"></path><path class="path-off-svg" xmlns="http://www.w3.org/2000/svg" d="M0.916992 6.95833C0.916992 3.4836 3.65059 0.75 7.12533 0.75C8.36989 0.75 9.58006 1.11731 10.6108 1.75224C10.9074 1.93496 11.1894 2.13999 11.4533 2.36507C11.6457 2.52911 11.8285 2.70384 12.0003 2.88839C12.1722 2.70384 12.355 2.52911 12.5473 2.36507C12.8112 2.13999 13.0932 1.93496 13.3899 1.75224C14.4206 1.11731 15.6308 0.75 16.8753 0.75C20.3501 0.75 23.0837 3.4836 23.0837 6.95833C23.0837 9.0825 22.1285 10.9911 20.5007 12.9864C18.8784 14.9749 16.5622 17.0798 13.7955 19.5939L13.7393 19.645L13.5138 19.8488C12.6547 20.6249 11.3469 20.6224 10.4908 19.843L10.2616 19.6344L10.2504 19.6242C7.37501 17.1579 5.04663 15.0479 3.4378 13.0368C1.82573 11.0216 0.916992 9.08225 0.916992 6.95833Z" fill="#894083"></path></svg></div></div><div class="wrapper-img"><img class="swiper-lazy" src="assets/p-i-opacity.png" alt="img" style="background-image:url(${`https://picsum.photos/id/${
          Math.floor(Math.random() * i) + 1
        }/200/300`})"><a href="#masthead"></a></div></div><div class="cart-caption"><div class="cart-caption__info"><h3 class="existence">В наличии</h3><span class="barcode">Код: 4744481010818</span></div><p class="cart-caption__desc">Морские водоросли Нори (плоские) обжаренные сушеные "Clearspring", 13.5г</p></div><div class="cart-info"><div class="cart-info__price"><p class="cart-info__price-new">8.98 р.</p><p class="cart-info__price-old"></p></div><button class="btn-shopping-cart__link" href="#masthead"></button></div><div class="cart-description"><div class="stepper"><span class="stepper-step down">-</span><input class="stepper-input" type="number" value="200" min="1" max="500" name="count_okna"><span class="stepper-step up">+</span></div><div class="cart-description__btns"><input class="input-submit" type="submit" value="Купить в 1 клик"><button class="btn-cart">В корзину</button></div></div></div>`;
        let d = `<div class="cart"><div class="cart-image"><div class="cart-image__top"><div class="stickers"><span class="action">Акция -25%</span></div><div class="wishlist path-off"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.12533 0.75C3.65059 0.75 0.916992 3.4836 0.916992 6.95833C0.916992 9.08225 1.82573 11.0216 3.4378 13.0368C5.04663 15.0479 7.37501 17.1579 10.2504 19.6242L10.2616 19.6344L10.4908 19.843C11.3469 20.6224 12.6547 20.6249 13.5138 19.8488L13.7393 19.645L13.7955 19.5939C16.5622 17.0798 18.8784 14.9749 20.5007 12.9864C22.1285 10.9911 23.0837 9.0825 23.0837 6.95833C23.0837 3.4836 20.3501 0.75 16.8753 0.75C15.6308 0.75 14.4206 1.11731 13.3899 1.75224C13.0932 1.93496 12.8112 2.13999 12.5473 2.36507C12.355 2.52911 12.1722 2.70384 12.0003 2.88839C11.8285 2.70384 11.6457 2.52911 11.4533 2.36507C11.1894 2.13999 10.9074 1.93496 10.6108 1.75224C9.58006 1.11731 8.36989 0.75 7.12533 0.75ZM2.41699 6.95833C2.41699 4.31202 4.47901 2.25 7.12533 2.25C8.07623 2.25 9.01602 2.53162 9.82407 3.02937C10.2889 3.31569 10.704 3.66992 11.0486 4.07459L12.0003 5.19217L12.952 4.07459C13.2966 3.66992 13.7118 3.31569 14.1766 3.02937C14.9846 2.53162 15.9244 2.25 16.8753 2.25C19.5216 2.25 21.5837 4.31202 21.5837 6.95833C21.5837 8.59111 20.8624 10.1701 19.3384 12.0382C17.8 13.9239 15.5759 15.9492 12.7733 18.4961L12.7326 18.533L12.5082 18.7357C12.2219 18.9944 11.7859 18.9936 11.5006 18.7338L11.2706 18.5245L11.2453 18.5014L11.2296 18.4879C8.34561 16.0143 6.11903 13.9873 4.60913 12.0998C3.11308 10.2296 2.41699 8.61372 2.41699 6.95833Z" fill="#894083"></path><path class="path-off-svg" xmlns="http://www.w3.org/2000/svg" d="M0.916992 6.95833C0.916992 3.4836 3.65059 0.75 7.12533 0.75C8.36989 0.75 9.58006 1.11731 10.6108 1.75224C10.9074 1.93496 11.1894 2.13999 11.4533 2.36507C11.6457 2.52911 11.8285 2.70384 12.0003 2.88839C12.1722 2.70384 12.355 2.52911 12.5473 2.36507C12.8112 2.13999 13.0932 1.93496 13.3899 1.75224C14.4206 1.11731 15.6308 0.75 16.8753 0.75C20.3501 0.75 23.0837 3.4836 23.0837 6.95833C23.0837 9.0825 22.1285 10.9911 20.5007 12.9864C18.8784 14.9749 16.5622 17.0798 13.7955 19.5939L13.7393 19.645L13.5138 19.8488C12.6547 20.6249 11.3469 20.6224 10.4908 19.843L10.2616 19.6344L10.2504 19.6242C7.37501 17.1579 5.04663 15.0479 3.4378 13.0368C1.82573 11.0216 0.916992 9.08225 0.916992 6.95833Z" fill="#894083"></path></svg></div></div><div class="wrapper-img"><img class="swiper-lazy" src="assets/p-i-opacity.png" style="opacity:.5;background-image:url(${`https://picsum.photos/id/${
          Math.floor(Math.random() * i) + 1
        }/200/300`})" alt="img"><a href="#masthead"></a></div></div><div class="cart-caption"><div class="cart-caption__info"><h3 class="existence" style="color:#c74a2c">Отсутствует</h3><span class="barcode">Код: 4744481010818</span></div><p class="cart-caption__desc">Рисовые хлебцы с молочным шоколадом, 34г</p></div><div class="cart-info"><div class="cart-info__price"><p class="cart-info__price-new">2.98 р.</p><p class="cart-info__price-old">4.00 р.</p></div><button class="btn-shopping-cart__link" href="#masthead"><div class="shopcart"><img class="img" src="assets/b944869301fe4aac804a.svg" alt="cart"><span class="total-shopping">3</span></div></button></div><div class="cart-description"><div class="stepper"><span class="stepper-step down">-</span><input class="stepper-input" type="number" value="200" min="1" max="500" name="count_okna"><span class="stepper-step up">+</span></div><div class="cart-description__btns"><input class="input-submit" type="submit" value="Купить в 1 клик"><button class="btn-cart">В корзину</button></div></div></div>`;
        let slObj = [a, b, c, d];
        slides.push(slObj[Math.floor(Math.random() * 4) + 1 - 1]);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
      }
      return slides;
    })(),
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});

import _ from "lodash";

async function getComponent() {
  function component() {
    const element = document.createElement("div");
    const _ = import(/* webpackChunkName: "lodash" */ "lodash");
    const button = document.createElement("button");
    const br = document.createElement("br");

    button.innerHTML = "Click me and look at the console!";
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    // button.onclick = (e) =>
    //   import(/* webpackChunkName: "print" */ "./print").then((module) => {
    //     const print = module.default;

    //     print();
    //   });

    return element;
  }
}

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
// document.body.appendChild(component());
// @vitosik_poltosik
// https://webpack.js.org/guides/lazy-loading/
