// Логин//

var openingloginin = document.querySelector(".user-login-out");
var openingloginout = document.querySelector(".user-login-in");
var loginin = document.querySelector(".login-in-box");

openingloginin.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginin.classList.add("login-visible");
  openingloginin.classList.remove("login-visible");
});

openingloginout.addEventListener("click", function (evt) {
  evt.preventDefault();
  openingloginin.classList.add("login-visible");
  loginin.classList.remove("login-visible");
});

// Слайдер популярных товаров

var slidercontrols = Array.prototype.slice.call(document.querySelectorAll(".slider-controls-button"));
var sliderlist = document.querySelector(".slider-list");

if (sliderlist) {
  var slideritem = sliderlist.querySelectorAll(".slider-item");


  slidercontrols.forEach(function (button, i) {
    button.addEventListener("click", function () {

      for (var y = 0; y < slideritem.length; y++) {
        slideritem[y].classList.remove("slider-item-active");
        slidercontrols[y].classList.remove("slider-controls-button-active");
      }

      this.classList.add("slider-controls-button-active");
      slideritem[i].classList.add("slider-item-active");
    });
  });
}

//  Слайдер услуг

var servicescontrols = Array.prototype.slice.call(document.querySelectorAll(".services-controls-button"));
var serviceslist = document.querySelector(".services-list");

if (serviceslist) {
  var servicesitem = serviceslist.querySelectorAll(".services-item");


  servicescontrols.forEach(function (button, i) {
    button.addEventListener("click", function () {

      for (var y = 0; y < servicesitem.length; y++) {
        servicesitem[y].classList.remove("services-item-active");
        servicescontrols[y].classList.remove("services-controls-button-active");
      }

      this.classList.add("services-controls-button-active");
      servicesitem[i].classList.add("services-item-active");
    });
  });
}

// Попап обратной связи

var openingform = document.querySelector(".form-button");
var closingform = document.querySelector(".modal-close-write-us");
var popupform = document.querySelector(".modal-write-us");
var overlay = document.querySelector(".modal-overlay");

openingform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupform.classList.add("modal-write-us-visible");
  overlay.classList.add("modal-overlay-visible");
});

closingform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupform.classList.remove("modal-write-us-visible");
  overlay.classList.remove("modal-overlay-visible");
});

// Попап карта

var openingmap = document.querySelector(".map-button");
var closingmap = document.querySelector(".modal-close-map");
var popupmap = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-overlay");

openingmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal-map-visible");
  overlay.classList.add("modal-overlay-visible");
});

closingmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal-map-visible");
  overlay.classList.remove("modal-overlay-visible");
});
