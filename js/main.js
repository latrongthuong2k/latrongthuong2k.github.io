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
// const icons = document.querySelectorAll('.icon');

// if (icons) {  // check if the icons element exists
//   icons.forEach(icon => {
//     icon.addEventListener('click', function() {
//       const sectionId = this.getAttribute('data-section');
//       const section = document.querySelector(sectionId);
//       section.scrollIntoView({ behavior: 'smooth' });
//     });
//   });
// }

// window.addEventListener('scroll', function() {
//   const sections = document.querySelectorAll('section');
//   const dock = document.querySelector('#dock');

//   if (sections && dock) {
//     sections.forEach(section => {
//       const top = section.offsetTop - dock.offsetHeight;
//       const bottom = top + section.offsetHeight;
//       if (window.pageYOffset > top && window.pageYOffset < bottom) {
//         const id = section.getAttribute('id');
//         const icon = document.querySelector(`[data-section="#${id}"]`);
//         if (icon) {  // check if the icon element exists
//           icons.forEach(icon => icon.classList.remove('active'));
//           icon.classList.add('active');
//         }
//       }
//     });
//   }
// });