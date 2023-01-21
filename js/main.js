// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

// menuButton
menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
// overlayButton
overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// window.addEventListener('load', fadeInImages);


// function fadeInImages() {
//   const images = document.querySelectorAll('.fade-in-image');
//   const options = {
//     threshold: 0
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('fade-in');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);
//   images.forEach(image => {
//     observer.observe(image);
//   });
// }
//================================================================ 
// Text
window.addEventListener('load', fadeInText);
function fadeInText() {
  const text = document.querySelectorAll('.fade-in-text');
  const options = {
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  text.forEach(t => {
    observer.observe(t);
  });
}

//================================================================
// var productDescription = document.getElementById("product-description");
// var menuIndicator = document.getElementById("menu-indicator");
// var menuBar = document.getElementById("menu-bar");

// // Listen for scroll event
// window.addEventListener("scroll", function() {
//   // Get the current scroll position
//   var scrollPosition = window.pageYOffset;
//   // Move the product description based on the scroll position
//   productDescription.style.top = -scrollPosition + "px";
  
//   // Get the current position of the indicator
//   var indicatorTop = parseFloat(menuIndicator.style.top);
//   // Calculate the new position of the indicator based on the scroll position
//   var newIndicatorTop = (scrollPosition / menuBar.clientHeight) * 100;
//   // Use the "clamp" function to limit the indicator's movement to the size of the menu bar
//   var clampedIndicatorTop = Math.max(0, Math.min(newIndicatorTop, 100 - (menuIndicator.clientHeight / menuBar.clientHeight) * 100));
//   // Update the position of the indicator
//   menuIndicator.style.top = clampedIndicatorTop + "%";
// });