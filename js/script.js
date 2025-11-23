let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

// Home slider removed - using static hero layout instead

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

document.addEventListener("DOMContentLoaded", function () {
   const boxes = document.querySelectorAll(".box");

   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           entry.target.classList.add("show"); // Add animation class
         }
       });
     },
     { threshold: 0.2 } // Trigger when 20% of the box is visible
   );

   boxes.forEach((box) => {
     observer.observe(box);
   });

   // Animated Counter for Stats
   const animateCounter = (element) => {
     const target = parseInt(element.getAttribute('data-target'));
     const suffix = element.getAttribute('data-suffix') || '';
     const duration = 2000; // 2 seconds
     const increment = target / (duration / 16); // 60fps
     let current = 0;

     const updateCounter = () => {
       current += increment;
       if (current < target) {
         element.textContent = Math.floor(current) + suffix;
         requestAnimationFrame(updateCounter);
       } else {
         element.textContent = target + suffix;
       }
     };

     updateCounter();
   };

   // Observe stat numbers
   const statNumbers = document.querySelectorAll('.stat-number');
   const statsObserver = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
           entry.target.classList.add('animated');
           animateCounter(entry.target);
         }
       });
     },
     { threshold: 0.5 }
   );

   statNumbers.forEach((stat) => {
     statsObserver.observe(stat);
   });
 });