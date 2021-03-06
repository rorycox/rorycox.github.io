// Responsive navigation
function openMenu() {
  var overlay = document.getElementById("header__overlay");
  var menu = document.getElementById("main-nav");
  overlay.classList.toggle("is-visible");
  menu.classList.toggle("is-open");
}

// For lazy loading
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
});
