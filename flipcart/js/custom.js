// Get the offset position of the navbar
var navbar = document.getElementById("navbar");
var stickyOffset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position
// Remove "sticky" when you leave the scroll position
function stickyNav() {
  var scrollTop = window.pageYOffset;

  if (scrollTop > stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Run the function on page load and scroll
stickyNav();

window.onscroll = function () {
  stickyNav();
};

