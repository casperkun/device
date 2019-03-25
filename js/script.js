// Логин//

// Попап обратной связи//

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

// Попап карта//

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
